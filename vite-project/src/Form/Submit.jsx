import React from 'react'
import styles from '../Form/Submit.module.css'

const Submit = ({text}) => {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default Submit