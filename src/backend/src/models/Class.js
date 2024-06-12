class Class {
    constructor(id_turma, nome, fk_id_oficina, data_inicio, data_fim, dias_semana) {
      this.id_turma = id_turma;
      this.nome = nome;
      this.fk_id_oficina = fk_id_oficina;
      this.data_inicio = data_inicio;
      this.data_fim = data_fim;
      this.dias_semana = dias_semana;
    }
  }
  
  module.exports = Class;
  