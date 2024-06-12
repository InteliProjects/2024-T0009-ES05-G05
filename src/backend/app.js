const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

// Importando o DatabaseService
const dbService = require('./src/services/databaseServices');

// Definindo a porta do servidor
const PORT = process.env.PORT || 3333;

const studentRoutes = require('./src/routes/studentRoutes');
const teacherRoutes = require('./src/routes/teacherRoutes');
const leaderRoutes = require('./src/routes/leaderRoutes');
const ongRoutes = require('./src/routes/ongRoutes');
const WorkshopRoutes = require('./src/routes/workshopRoutes');
const ClassRoutes = require('./src/routes/classRoutes');
const RegisterClassRoutes = require('./src/routes/registerClassRoutes');
const ClassTeacherRoutes = require('./src/routes/classTeacherRoutes');
const AttendanceListRoutes = require('./src/routes/attendanceListRoutes');
const UserRoutes = require('./src/routes/userRoutes');
const LessonRoutes = require('./src/routes/lessonRoutes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurações do Express
app.use(express.json()); // Permite o uso de JSON para envio e recebimento de dados

// Rotas
app.use('/lesson', LessonRoutes);
app.use('/users', UserRoutes);
app.use('/attendanceList', AttendanceListRoutes)
app.use('/classTeacher', ClassTeacherRoutes);
app.use('/registerClasses', RegisterClassRoutes);
app.use('/classes', ClassRoutes);
app.use('/workshops', WorkshopRoutes);
app.use('/ongs', ongRoutes)
app.use('/leaders', leaderRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Inicia o servidor e escuta na porta especificada
app.listen(PORT, async () => {
  try {
    // Conecta-se ao banco de dados usando o DatabaseService
    await dbService.connect();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});

// In case of SSH connection error, reconnect automatically
dbService.sshClient.on('error', async err => {
    console.error('SSH connection error:', err);
    await dbService.reconnect();
});


