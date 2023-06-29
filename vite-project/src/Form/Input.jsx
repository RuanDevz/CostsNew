import React from 'react'
import styles from '../Form/Input.module.css'

const Input = ({type, text, name, placeholder, handleOnchange,value}) => {
  return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input type={type} name={name} placeholder={placeholder} onChange={handleOnchange} value={value} />
    </div>
  )
}

export default Input