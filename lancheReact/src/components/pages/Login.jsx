import { Link } from "react-router-dom";
import Menu from "../layouts/Menu";
import Container from "../layouts/Container";
import Input from "../formFields/Input";
import styles from "./Login.module.css";
function Login () {
  return (
    <>
    <Menu />
    <Container specialClass="column">
    <h1 className={`${styles.title}`}>Login</h1>
    <section className={styles.section}>
      <form method="POST" action="http://localhost:3001/client/login">
        <Input type="email" name="email" ident="email" />
        <Input type="password" name="passwd" ident="senha" />
        <div className={styles.btnDivs}>
        <button type="submit">entrar</button>
        <Link to="/client/cadClient">ainda não cadastrado?</Link>
        </div>
      </form>
    </section>
    </Container>
    </>
  );
}
export default Login;