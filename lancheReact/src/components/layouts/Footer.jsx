import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Container from "./Container";
function Footer () {
  return (
    <Container specialClass="bottom">
    <footer className={`${styles.footer}`}>
      <div className={styles.footerSocial}>
        <h4>Siga-nos nas redes sociais</h4>
        <div className={styles.social}
        >
        <a href="http://facebook.com" className={styles.face}>f</a>
        <a href="" className={styles.whats}>w</a>
        <a href="" className={styles.insta}>i</a>
        </div>
      </div>
      <div className={styles.footerProds}>
        <h4>Nossos produtos</h4>
        <div className={styles.prods}>
          <p>Lanches</p>
          <p>Carnes</p>
          <p>Porções</p>
          <p>Em breve, mais!</p>
        </div>
        <p className={styles.copy}>&copy;Lanche na Brasa</p>
      </div>
    </footer> 
    </Container>
  );
}
export default Footer;