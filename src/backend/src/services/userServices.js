const dbService = require('./databaseServices');
const User = require('../models/User');

class UserService {
  static async getAllUsers() {
    const results = await dbService.query('SELECT * FROM usuario');
    return results.map(row => new User(
      row.id_usuario,
      row.nome,
      row.email,
      row.senha,
      row.permissoes
    ));
  }

  static async getUserById(id) {
    const query = 'SELECT * FROM usuario WHERE id_usuario = ?';
    const result = await dbService.query(query, [id]);
    if (result.length === 0) {
      throw new Error('Usuário não encontrado.');
    }
    return new User(
      result[0].id_usuario,
      result[0].nome,
      result[0].email,
      result[0].senha,
      result[0].permissoes
    );
  }

  static async addUser(userData) {
    const { nome, email, senha, permissoes } = userData;
    const query = 'INSERT INTO usuario (nome, email, senha, permissoes) VALUES (?, ?, ?, ?)';
    const result = await dbService.query(query, [nome, email, senha, permissoes]);
    return result.insertId;
  }

  static async updateUser(id, updatedData) {
    const { nome, email, senha, permissoes } = updatedData;
    const query = 'UPDATE usuario SET nome=?, email=?, senha=?, permissoes=? WHERE id_usuario=?';
    const result = await dbService.query(query, [nome, email, senha, permissoes, id]);
    return result.affectedRows > 0;
  }

  static async deleteUser(id) {
    const query = 'DELETE FROM usuario WHERE id_usuario=?';
    const result = await dbService.query(query, [id]);
    return result.affectedRows > 0;
  }

  static async searchUser(query) {
    const searchQuery = '%' + query + '%';
    const searchResults = await dbService.query('SELECT * FROM usuario WHERE nome LIKE ? OR id_usuario = ?', [searchQuery, query]);
    return searchResults.map(row => new User(
      row.id_usuario,
      row.nome,
      row.email,
      row.senha,
      row.permissoes
    ));
  }

  static async loginUser(email, senha) {
    const query = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
    const result = await dbService.query(query, [email, senha]);
    if (result.length === 0) {
      throw new Error('Email ou senha incorretos.');
    }
    return new User(
      result[0].id_usuario,
      result[0].nome,
      result[0].email,
      result[0].senha,
      result[0].permissoes
    );
  }
  
}

module.exports = UserService;
