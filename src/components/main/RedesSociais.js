import { FaEnvelope, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from '../style/RedesSociais.module.css'


function RedesSociais(){
    return (
        <div className={style.container}>
            <h1>Encontre-nos em nossas redes</h1>
            <ul>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
                <li><FaEnvelope /></li>
            </ul>
        </div>

    )
}

export default RedesSociais