const repo = require ("./Repo")

class Repositories {
  allSnacks () {
    let sql = "SELECT * FROM lanches";
    return repo(sql,"Falha ao conectar!");
  }
  snackById(id) {
    let sql = "SELECT * FROM lanches WHERE id = ?";
    return repo(sql,[id],"Erro ao conectar!");
  }
}

module.exports = new Repositories();