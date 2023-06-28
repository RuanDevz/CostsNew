import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from  '../components/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
    </footer>
  )
}

export default Footer