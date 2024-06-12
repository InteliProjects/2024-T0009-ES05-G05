class Leader {
    constructor(id_lider, fk_id_ong, nome, email, data_nascimento, telefone, cpf, genero, etnia, endereco) {
      this.id_lider = id_lider;
      this.fk_id_ong = fk_id_ong;
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
  
  module.exports = Leader;
  