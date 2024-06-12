class Oficina {
    constructor(id_oficina, fk_id_ong, nome_oficina, categoria) {
      this.id_oficina = id_oficina;
      this.fk_id_ong = fk_id_ong;
      this.nome_oficina = nome_oficina;
      this.categoria = categoria;
    }
  }
  
  module.exports = Oficina;
