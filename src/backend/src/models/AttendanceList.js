class AttendanceList {
  constructor( fk_id_aluno, fk_id_aula, presenca, fk_id_oficina) {
    this.fk_id_aluno = fk_id_aluno;
    this.fk_id_aula = fk_id_aula;
    this.presenca = presenca;
    this.fk_id_oficina = fk_id_oficina;
  }
}

module.exports = AttendanceList;
