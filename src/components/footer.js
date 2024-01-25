import { FaEnvelope, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './style/Footer.module.css'
import { Link } from 'react-router-dom'


function footer(){
    return(
        <footer className={style.container}>
        <div>
            <div>
                <ul>
                
                      <li>
                <Link to='/Vmo'>Value Management Officer</Link>
                      </li>
                      <li >
                <Link to='/MbaEcursos'>MBAs e Cursos</Link>
                      </li>
                      <li>
                <Link to='/SobreNos'>Sobre-nós</Link>
                      </li>
                      <li>
                <Link to='/Contate-nos'>Contate-nos</Link>
                      </li>
                    </ul>
            </div>
            
                <div>
                    <ul className={style.cursosmenu}>
                        <li><Link to='/MbaEcursos/MbaGp'>MBA em Liderança e inovação na gestão de projetos</Link></li>
                        <li><Link to='/MbaEcursos/MbaSaude'>MBA em inovação e negócios em saúde</Link></li>
                        <li><Link to='/MbaEcursos/MbaEngSW'>MBA em engenharia de software</Link></li>
                        <li><Link to='/MbaEcursos/CursosInCompany'>Cursos InCompany</Link></li>
                    </ul>
                </div>
            
        </div>

            <ul className={style.redessociais}>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
                <li><FaEnvelope /></li>
            </ul>
            <p>Value Ware</p>
            
        </footer>
    )
}

export default footer