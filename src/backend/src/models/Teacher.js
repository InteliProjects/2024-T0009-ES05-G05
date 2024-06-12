class Professor {
    constructor(id_professor, nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco) {
      this.id_professor = id_professor;
      this.nome = nome;
      this.email = email;
      this.data_nascimento = data_nascimento;
      this.telefone = telefone;
      this.cpf = cpf;
      this.genero = genero;
      this.etnia = etnia;
      this.endereco = endereco;
    }
  }
  
  module.exports = Professor;
  