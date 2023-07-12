class Cart {
  constructor () {
    this.cart=[];
  }
  addCart (nome, valor, qtd, unit, pao) {
    let keyPao = this.cart.filter(val => val.name == nome && val.pao == pao);
    let key = this.cart.findIndex((val)=>val == keyPao[0]);
    if (key > -1) {
      this.cart[key].qt += parseInt(qtd);
      this.cart[key].value += parseFloat(valor);
    } else {
      let lanche = {
        name : nome,
        qt : parseInt(qtd),
        valUnit : parseFloat(unit),
        value : parseFloat(valor),
        pao
      }
      this.cart.push(lanche);
    }
  }
  
  addQtd (key,name,val,pao) {
    this.cart[key].qt++;
    this.cart[key].value += parseFloat(val);
  }
  
  rmvQtd (key,name,val,pao) {
    if (this.cart[key].qt > 0) {
      this.cart[key].qt--;
      this.cart[key].value -= parseFloat(val);
    } else {
      this.cart.splice(key,1);
    }
  }
  
  getCart() {
    return this.cart;
  }
}
module.exports = new Cart();