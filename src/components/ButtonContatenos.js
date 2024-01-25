import Style from './ButtonContatenos.module.css'
import { FaEnvelope } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function ButtonContatenos(){
    return(<>
        <div className={Style.container}>
        <Link to="/Contate-nos" className={Style.Link}>Contate-nos <FaEnvelope /></Link>
        </div>
    </>)
}

export default ButtonContatenos