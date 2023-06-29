import React from 'react'
import styles from '../pages/Projetos.module.css'
import ProjectForm from '../Project/ProjectForm'

const Projetos = () => {
  return (
    <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm />
    </div>
  )
}

export default Projetos