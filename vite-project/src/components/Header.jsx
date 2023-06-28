import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/Header.module.css";
import logo from "../img/logo.png"
import Container from "./Container";

const Header = () => {
  return (
      <nav>
        <ul className={styles.header}>
          <div className={styles.container_logo}>
          <Link to='/'><img className={styles.logo} src={logo} alt="Logo" /></Link>
          </div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/empresa">Empresa</Link></li>
          <li><Link to="/contato">Contatos</Link></li>
        </ul>
      </nav>
  );
}

export default Header;
