import style from './MbasEcursos.module.css'
import { Link } from 'react-router-dom'


//imagens cards
import InCompany from '../components/img/incompany.jpg'
import Gestaodeprojetos from '../components/img/gestaodeprojetos.jpg'
import Inovacaosaude from '../components/img/inovacaosaude.jpg'
import Webmobile from '../components/img/webmobile.jpg'


function MbasEcursos(){
    
    const cardStyle = {
        width: '18rem',
        height: '22rem',
        /* Adicione outros estilos conforme necessário */
      };
    
    return (
        <section className={`${style.mbaCursos}`}>
         
         <div className={style.titulo}>
                    <h1>MBAs e Cursos</h1>
                </div>
            
            <p>
            Explore nossos cursos e MBAs especializados para impulsionar sua carreira e adquirir conhecimentos essenciais.
            Cada programa é cuidadosamente projetado para atender às demandas do mercado e fornecer as habilidades necessárias
            para se destacar em sua área. Escolha o seu caminho de aprendizado abaixo e comece sua jornada para o sucesso!
                  </p>
        
            <div className={style.cards}>
                    <Link to={'/MbaEcursos/MbaGp'} className={style.link}>
                        <div className="card" style={cardStyle}>
                        <img className="card-img-top" src={Gestaodeprojetos} alt="Imagem de capa do card" />
                            <div className="card-body">
                                <p className="card-text">MBA em Liderança e Inovação na Gestão de Projetos 4.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/MbaEcursos/MbaSaude'} className={style.link}>
                        <div className="card" style={cardStyle}>
                            <img className="card-img-top" src={Inovacaosaude} alt="Imagem de capa do card" />
                            <div className="card-body">
                                <p className="card-text">MBA em Inovação e Negócios em Saúde </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/MbaEcursos/MbaEngSW'} className={style.link}>
                        <div className="card" style={cardStyle}>
                            <img className="card-img-top" src={Webmobile} alt="Imagem de capa do card" />
                            <div className="card-body">
                                <p className="card-text">MBA em Engenharia de Software - ênfase em  Desenvolvimento Mobile e Web 3.0</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/MbaEcursos/CursosInCompany'} className={style.link}>
                        <div className="card" style={cardStyle}>
                            <img className="card-img-top" src={InCompany} alt="Imagem de capa do card" />
                            <div className="card-body">
                                <p className="card-text">Cursos InCompay</p>
                            </div>
                        </div>
                    </Link>
            </div>

        </section>
    )
}

export default MbasEcursos