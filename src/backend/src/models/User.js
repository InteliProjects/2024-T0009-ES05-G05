// models/usuario.js

class User {
    constructor(id_usuario, nome, email, senha, permissoes) {
      this.id_usuario = id_usuario;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.permissoes = permissoes;
    }
  }
  
  module.exports = User;
  