import { Link } from 'react-router-dom'
import breadcrumb from '../style/breadcrumb.module.css'
import Style from '../style/Contato.module.css'


function Form (){
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
   
   <div className={Style.container} >
      
        <form className={Style.contato} id='contatenos'>
      <h1 style={{ fontWeight: '100' }}>Contate-nos</h1>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputName">Nome*</label>
          <input type="text" className="form-control" id="inputName" placeholder="Seu nome aqui" required />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputTel">Telefone</label>
          <input type="tel" className="form-control" id="inputTel" placeholder="(00) 9 0000-0000" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">E-mail*</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="exemplo@exemplo.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="inputCompany">Empresa</label>
        <input type="text" className="form-control" id="inputCompany" placeholder="Nome da empresa" />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputOffice">Cargo</label>
          <input type="text" className="form-control" id="inputOffice" placeholder="Exemplo: Gerente" />
        </div>
        <div className="form-group">
          <label htmlFor="inputTextArea">Mensagem</label>
          <textarea className="form-control" id="inputTextArea" rows="4" cols="250"></textarea>
        </div>
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>
</>
)

}

export default Form