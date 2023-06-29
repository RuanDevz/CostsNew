import React from 'react'
import styles from '../Project/ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import Submit from '../Form/Submit'

const ProjectForm = () => {
  return (
    <form className={styles.form}>
        <div>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome do Projeto' />
        </div>
        <div>
        <Input type='Number' text='Orçamento do Projeto' name='budget' placeholder='Insira o nome do Projeto' />
        </div>
        <div>
            <Select name='category_id' text='Selecione a categoria' />
        </div>
        <div>
            <Submit text='Criar Projeto'/>
        </div>
    </form>
  )
}

export default ProjectForm