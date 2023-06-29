import React from 'react'
import styles from '../pages/Home.module.css'
import saving from '../img/savings.svg'
import Criarprojeto from '../components/Criarprojeto'

const Home = () => {
  return (
    <div className={styles.principal}>
      <section className={styles.container_home}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar seus projetos agora mesmo!</p>
        <div>
        <Criarprojeto to='/projetos' text='Criar Projeto'/>
        </div>
        <img src={saving} alt="Costs" />
      </section>
    </div>
  )
}

export default Home