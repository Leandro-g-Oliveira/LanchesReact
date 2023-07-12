import Menu from "../layouts/Menu";
import Container from "../layouts/Container";
import styles from "./Cart.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart () {
  const [lanches, setLanches] = useState([]);
  
  useEffect (()=>{
    fetch("http://localhost:3001/cart/",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(res=>setLanches(res))
    .catch(err=>console.log(err));
  },[]);
  
  function rmv (e) {
    //e.preventDefault();
    let key=event.target.getAttribute("data-key");
    fetch("http://localhost:3001/cart/qtd",{
      method:"POST",
      body:JSON.stringify({
        key,
        name:lanches[key].name,
        val:lanches[key].valUnit,
        pao:lanches[key].pao,
        oper:"down"
      }),
      headers:{
        "Content-Type":"application/json"
      }
    })//endFetch
    let tr = document.querySelectorAll("tbody>tr")
    if (lanches[key].qt > 1) {
      tr[key].classList.add("hidden")
    }
  }
  
  function add (e) {
    //e.preventDefault();
    let key=event.target.getAttribute("data-key");
    fetch("http://localhost:3001/cart/qtd",{
      method:"POST",
      body:JSON.stringify({
        key,
        name:lanches[key].name,
        val:lanches[key].valUnit,
        pao:lanches[key].pao,
        oper:"up"
      }),
      headers:{
        "Content-Type":"application/json"
      }
    })//endFetch
  }
  return (
    <>
      <Menu />
      <Container specialClass="center">
        <table className={`${styles.table}`}>
          <thead>
            <tr>
              <th>nome</th>
              <th>qtd</th>
              <th>valor</th>
              <th>pão</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
          {lanches.map((val,ind)=>(
            <tr key={ind}>
              <td>{val.name}</td>
              <td>{val.qt}</td>
              <td>R$ {val.value}</td>
              <td>{val.pao}</td>
              <td className={styles.actions}>
                <a href="" data-key={ind} onClick={rmv}><span className={`${styles.icon} ${styles.iconM}`}>-</span></a>
                <a href="" data-key={ind} onClick={add}><span className={styles.icon}>+</span></a>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
export default Cart;