class Student {
  constructor(id_aluno, nome, email, telefone, data_nascimento, cpf, genero, etnia, endereco, estado_civil, status) {
      this.id_aluno = id_aluno;
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.data_nascimento = data_nascimento;
      this.cpf = cpf;
      this.genero = genero;
      this.etnia = etnia;
      this.endereco = endereco;
      this.estado_civil = estado_civil;
      this.status = status;
  }
}

module.exports = Student;
