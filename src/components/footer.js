import { FaEnvelope, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './style/Footer.module.css'
import { Link } from 'react-router-dom'


function footer(){
    return(
        <footer className={style.container}>
        <div>
            <div>
                <ul className={style.navfooter}>
                    <li>
                <Link to='/SobreNos'>Institucional</Link>
                      </li>
                      <li> | </li>
                      <li>
                <Link to='/Vmo'>Value Management Officer</Link>
                      </li>
                      <li> | </li>
                      <li >
                <Link to='/MbaEcursos'>MBAs e Cursos</Link>
                      </li>
                      <li> | </li>
                      <li>
                <Link to='/Contate-nos'>Contatos</Link>
                      </li>
                    </ul>
            </div>
            
                
            
        </div>

            <ul className={style.redessociais}>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
                <li><FaEnvelope /></li>
            </ul>
            <p>copyright © - Value ware Consultoria e Gestão e Co-Criação de Valor</p>
            
        </footer>
    )
}

export default footer