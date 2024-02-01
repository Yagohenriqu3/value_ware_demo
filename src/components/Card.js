import { Link } from 'react-router-dom'
import style from './style/Card.module.css'

function Card({img, alt, titulo, caminho, em}){
    return(
        <div className={style.card}>

            <Link to={caminho}>
                <img src={img} alt={alt} />
                <p>{titulo}<em>{em}</em></p>
            </Link>
        </div>
    )
}

export default Card