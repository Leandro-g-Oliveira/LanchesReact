import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../layouts/Menu";
import Container from "../layouts/Container";
import LancheCard from "../lanches/LancheCard";
import styles from "./Home.module.css";
function Home () {
  const [lanches, setLanches] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(response=>response.json())
    .then(response=>setLanches(response))
    .catch(err=>console.log(err))
},[])
  
  return (
    <>
    <Menu />
    <Container specialClass="minHeight">
      <Link className={styles.link} to="/cart/">🛒</Link>
      {lanches.map((val)=>(
        <a className={styles.linkLanche} href={`/client/product/${val.id}`}>
          <LancheCard id={val.id} nome={val.nome} preco={val.valor} desc={val.descricao} />
          </a>
      ))}
      </Container>
    </>
  );
}
export default Home;