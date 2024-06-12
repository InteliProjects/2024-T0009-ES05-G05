class ClassTeacher {
    constructor( fk_id_professor, fk_id_turma, fk_id_oficina) {
      this.fk_id_professor = fk_id_professor;
      this.fk_id_turma = fk_id_turma;
      this.fk_id_oficina = fk_id_oficina;
    }
  }

module.exports = ClassTeacher;
  