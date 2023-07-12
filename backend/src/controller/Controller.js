const Repositories = require ("../repositories/Repositories");
const Cart = require ("../repositories/Cart");
class Controller {
  async home (req,res) {
    let row = await Repositories.allSnacks(); 
    res.json(row);
  }
  
  async snackById (req,res) {
    let id = req.params.id;
    let row = await Repositories.snackById(id);
    res.json(row);
  }
  
  cart (req,res) {
    let {nome, valor, qtd, vUnit, pao} = req.body;
    if (nome != undefined && valor!= undefined && qtd != undefined && vUnit != undefined && pao != undefined) {
      Cart.addCart(nome, valor, qtd, vUnit, pao);
      req.session.cart = Cart.getCart();
    }
  }
  
  cartGet (req,res) {
    let row = Cart.getCart();
    res.json(row);
  }
  
  cartQtd (req,res) {
    let {key,name,val,pao,oper} = req.body;
    if (key != undefined && name != undefined && val != undefined && pao != undefined && oper == "up") {
      Cart.addQtd(key,name,val,pao);
      //let row = Cart.getCart();
      //res.json(row);
    }
    if (key != undefined && name != undefined && val != undefined && pao != undefined && oper == "down") {
      Cart.rmvQtd(key,name,val,pao);
      //let row = Cart.getCart();
      //res.json(row);
    }
  }
  
  loginCli (req,res) {
    console.log(req.body)
  }
}
module.exports = new Controller();