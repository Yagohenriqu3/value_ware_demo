import { FaEnvelope, FaLinkedin} from 'react-icons/fa'
import style from '../style/RedesSociais.module.css'


function RedesSociais(){
    return (
        <div className={style.container}>
            <h1>Encontre-nos em nossas redes</h1>
            <ul>
                <a href="https://www.linkedin.com/company/value-ware/" target='_blank'>
                    <li><FaLinkedin /></li>
                </a>
                <a href="mailto:contato@valueware.com.br">
  <li><FaEnvelope /></li>
</a>
                
            </ul>
        </div>

    )
}

export default RedesSociais