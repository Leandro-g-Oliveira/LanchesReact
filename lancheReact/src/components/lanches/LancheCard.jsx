
import styles from "./LancheCard.module.css";
function LancheCard ({id, nome, preco, desc }) {
  
  return (
    <div className={`${styles.lancheUniq} ${styles.none}`}>
      <img src="" alt="" className={styles.none}/>
      <h5 className={`${styles.lancheNome} ${styles.none}`}>{nome}</h5>
      <p className={`${styles.lanchePrice} ${styles.none}`}>{preco}</p>
      <p className={`${styles.lancheDesc} ${styles.none}`}>{desc}</p>
    </div>
  );
}
export default LancheCard;