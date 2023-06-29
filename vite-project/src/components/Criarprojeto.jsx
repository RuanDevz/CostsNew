import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../pages/Home.module.css'

const Criarprojeto = ({to,text}) => {
  return (
    <div>
        <Link to={to}>{text}</Link>
    </div>
  )
}

export default Criarprojeto