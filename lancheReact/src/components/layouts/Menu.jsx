import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Menu.module.css";
import Container from "./Container";

function Menu () {
  function mobMenu () {
    document.querySelector("nav").classList.toggle(styles.active);
    console.log(document.querySelector("nav"))
  }
  
  return (
    <Container>
    <nav className={styles.nav}>
      <Link className={styles.links} to="/">Lanches</Link>
      <div className={`${styles.mobileMenu}`} onClick={mobMenu}>
        <div className={`${styles.opt} ${styles.fir}`}></div>
        <div className={`${styles.opt} ${styles.sec}`}></div>
        <div className={`${styles.opt} ${styles.tir}`}></div>
      </div>
      <ul className={styles.menu}>
        <li className={styles.li}><Link className={styles.links} to="/">Início</Link></li>
        <li className={styles.li}><Link className={styles.links} to="/client/login">login</Link></li>
      </ul>
    </nav>
    </Container>
  );
}
export default Menu;