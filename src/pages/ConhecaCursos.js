import SaladeaulafaculdadeImage from '../components/img/main/saladeaulafaculdade.webp'
import style from './ConhecaCursos.module.css'
import { Link } from 'react-router-dom'

function ConhecaCursos(){
    return(
        <section className={style.container}>
        <h1>Conheça nossos cursos</h1>
            <div>
                <img src={SaladeaulafaculdadeImage} alt='Sala de aula' />
                <div>
                    <p>Explore os horizontes do conhecimento com os nossos cursos de MBA de excelência. Desenvolvidos por especialistas do setor, nossos programas oferecem uma abordagem prática e inovadora para impulsionar sua carreira. Aperfeiçoe suas habilidades, conquiste novas oportunidades e esteja à frente no mercado com a expertise adquirida em nossos cursos de MBA.</p>
                    <Link to='/MbaEcursos'>Saiba mais</Link>
                </div>
                
            </div>
            
        </section>
    )
}

export default ConhecaCursos