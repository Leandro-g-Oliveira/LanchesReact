import { Link } from "react-router-dom";
import Menu from "../layouts/Menu";
import Container from "../layouts/Container";
import Input from "../formFields/Input";
import styles from "./LoginAdmin.module.css";
function LoginAdmin () {
  return (
    <>
      <Menu />
      <Container specialClass="column">
        <h1>Login Admin</h1>
        <section className={`${styles.section}`}>
          
        </section>
      </Container>
    </>
  )
}
export default LoginAdmin;