const mysql = require('mysql2');
const { Client } = require('ssh2');
const fs = require('fs');

class dbService {
    constructor(sshConfig, dbConfig) {
        this.sshConfig = sshConfig;
        this.dbConfig = dbConfig;
        this.sshClient = new Client();
        this.connection = null;
    }

    async connect() {
        return new Promise((resolve, reject) => {
            this.sshClient.on('ready', () => {
                this.sshClient.forwardOut(
                    '127.0.0.1',
                    this.dbConfig.localPort,
                    this.dbConfig.host,
                    this.dbConfig.port,
                    (err, stream) => {
                        if (err) reject(err);

                        this.connection = mysql.createConnection({
                            user: this.dbConfig.user,
                            password: this.dbConfig.password,
                            database: this.dbConfig.database,
                            stream: stream
                        });

                        // Handle connection errors
                        this.connection.on('error', err => {
                            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                                console.log('Connection lost. Reconnecting...');
                                this.reconnect();
                            } else {
                                reject(err);
                            }
                        });

                        resolve(this.connection);
                    }
                );
            });

            this.sshClient.connect(this.sshConfig);
        });
    }

    async reconnect() {
        this.connection = null;
        setTimeout(async () => {
            try {
                await this.connect();
            } catch (error) {
                console.error('Error reconnecting:', error);
                this.reconnect(); // Retry reconnecting
            }
        }, 2000); // Reconnect after 2 seconds
    }

    async query(sqlQuery, values) {
        if (!this.connection) {
            await this.connect();
        }
    
        return new Promise((resolve, reject) => {
            this.connection.query(sqlQuery, values, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}

const sshConfig = {
    host: '35.175.226.177',
    port: 22,
    username: 'ubuntu',
    password: '12345678',
    privateKey: fs.readFileSync('fly_backend.pem')
};

const dbConfig = {
    host: 'fly-database.cnkg2y8seqqs.us-east-1.rds.amazonaws.com',
    user: 'fly',
    password: '12345678',
    database: 'fly_database',
    port: 3306,
    localPort: 3333
};

module.exports = new dbService(sshConfig, dbConfig);