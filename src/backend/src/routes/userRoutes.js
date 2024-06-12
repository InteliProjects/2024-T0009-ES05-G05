const express = require('express');
const UserController = require('../controllers/userControllers');
const router = express.Router();

// Rota para obter todos os usuários
router.get('/', UserController.getAllUsers);

// Rota para obter um usuário pelo ID
router.get('/:id', UserController.getUserById);

// Rota para adicionar um novo usuário
router.post('/', UserController.addUser);

// Rota para atualizar um usuário pelo ID
router.put('/:id', UserController.updateUser);

// Rota para excluir um usuário pelo ID
router.delete('/:id', UserController.deleteUser);

// Rota para pesquisar usuários
router.get('/search', UserController.searchUser);

// Rota para fazer login
router.post('/login', UserController.loginUser);

module.exports = router;
