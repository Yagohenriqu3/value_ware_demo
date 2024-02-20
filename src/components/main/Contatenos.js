import { Link } from 'react-router-dom'
import breadcrumb from '../style/breadcrumb.module.css'
import Style from '../style/Contato.module.css'

import { useState } from 'react'

function Form (){
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    empresa: '',
    cargo: '',
    mensagem: '',
  })

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value 
    })
  }

  const handleForm = async (event) => {
    try{
      event.preventDefault()
      const response = await fetch(`http://localhost:3001/api/formulario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const json = await response.json()
      console.log(response.status)
      console.log(json)
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
    }
  }

  return (
    <>
      <nav className={breadcrumb.nav}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>/</li>
          <li>Contate-nos</li>
        </ul>
      </nav> 
   
      <div className={Style.container}>
        <form action="enviar_formulario.php" method="POST"
        className={Style.contato} id='contatenos' onSubmit={handleForm}>
          <h1 style={{ fontWeight: '100' }}>Contate-nos</h1>
          <div className="form-row">

             {/* Campo para o nome do usuário. Obrigatório. */}
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Nome*</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputName" 
                name={formData.name} 
                onChange={(e) => {handleFormEdit(e, 'name')}} 
                placeholder="Seu nome aqui" 
                required  />
            </div>

            {/* Campo para o telefone do usuário. Opcional. */}
            <div className="form-group col-md-6">
              <label htmlFor="inputTel">Telefone</label>
              <input 
                type="tel" 
                className="form-control" 
                id="inputTel"
                name={formData.tel} 
                onChange={(e) => {handleFormEdit(e, 'tel')}} 
                placeholder="(00) 9 0000-0000" />
            </div>
          </div>

          {/* Campo para o email do usuário. Obrigatório. */}
          <div className="form-group">
            <label htmlFor="inputEmail">E-mail*</label>
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              name={formData.email} 
              onChange={(e) => {handleFormEdit(e, 'email')}} 
              placeholder="exemplo@exemplo.com" 
              required  />
            
          </div>

          {/* Campo para o nome da empresa do usuário. Opcional. */}
          <div className="form-group">
            <label htmlFor="inputCompany">Empresa</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputCompany" 
              name={formData.empresa} 
              onChange={(e) => {handleFormEdit(e, 'empresa')}} 
              placeholder="Nome da empresa" />
          </div>

          {/* Campo para o cargo do usuário. Opcional. */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputOffice">Cargo</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputOffice" 
                name={formData.cargo} 
                onChange={(e) => {handleFormEdit(e, 'cargo')}} 
                placeholder="Exemplo: Gerente"  />
              
            </div>

             {/* Campo para a mensagem do usuário. Opcional. */}
            <div className="form-group">
              <label htmlFor="inputTextArea">Mensagem</label>
              <textarea 
                className="form-control" 
                id="inputTextArea" 
                name={formData.mensagem} 
                onChange={(e) => {handleFormEdit(e, 'mensagem')}} 
                rows="4" 
                cols="250"></textarea>
             
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Form
