class Lesson {
    constructor(id_aula, nome, data, fk_id_turma, fk_id_oficina) {
      this.id_aula = id_aula;
      this.nome = nome;
      this.data = data;
      this.fk_id_turma = fk_id_turma;
      this.fk_id_oficina = fk_id_oficina;
    }
  }
  
  module.exports = Lesson;
  