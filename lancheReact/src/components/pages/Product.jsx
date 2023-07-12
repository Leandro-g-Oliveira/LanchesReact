import { useParams, Link } from "react-router-dom";
import { useState, useEffect} from "react";
import styles from "./Product.module.css";
import Menu from "../layouts/Menu";
import Container from "../layouts/Container";
import Select from "../formFields/Select";

function Product () {
  
  var {id} = useParams();
  const [produtos, setProdutos] = useState([]);
  const [valorAtual, setValorAtual] = useState(produtos.valor)
  const [qtd, setQtd] = useState(1);
  const [pao, setPao] = useState("Hambúrguer");
  const opt = ["Hambúrguer","Francês","Brioche"];
  
  function qtdMais () {
    let qt = qtd;
    qt++;
    setQtd(qt);
    setValorAtual(qt*produtos[0].valor)
  }
  function qtdMenos () {
    let qt = qtd;
    if (qt > 1) {
      qt--;
      setQtd(qt);
      setValorAtual(qt*produtos[0].valor)
    }
  }
  
  function enviar () {
    fetch(`http://localhost:3001/cart`,{
      method:"POST",
      body:JSON.stringify({
          nome:produtos[0].nome,
          valor:valorAtual,
          qtd,
          vUnit:produtos[0].valor,
          pao
      }),
      headers:{
        "Content-Type":"application/json",
      },
    })
    alert("Adicionado ao carrinho!");
  }
  
  useEffect(()=>{
    fetch(`http://localhost:3001/client/product/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
      },
    })
    .then(res=>res.json())
    .then((res)=>{
      setProdutos(res)
    })
    .catch(err=>console.log(err))
  },[id]);
  
  return (
    <>
      <Menu/>
      {produtos.map((val)=>(
        <Container specialClass="center">
          <header className={`${styles.header}`}>
            <div className={`${styles.nameArea}`}>
              <Link className={`${styles.voltar}`}to="/">voltar</Link>
              <h3 className={`${styles.nome}`}>{val.nome}</h3>
            </div>
          </header>
          
          <section className={styles.sectionDesc}>
            <img className={styles.img} src="" alt="" />
            <div className={styles.infoQtd}>
              <p className={styles.desc}>{val.descricao}</p>
              <div className={styles.qtdArea}>
                <button onClick={qtdMenos}>-</button>
                <p>{qtd}</p>
                <button onClick={qtdMais}>+</button>
              </div>
            </div>
            <h1 className={styles.valor}>R$ {parseFloat(val.valor) * parseInt(qtd)}</h1>
            <Select nome="pao" item={opt} padrao="--Escolha seu pão--" change={setPao} />
            
            <button className={`${styles.btn}`} onClick={enviar}>Add ao carrinho</button>
          </section>
        </Container>
      ))}
    </>
  );
}
export default Product;