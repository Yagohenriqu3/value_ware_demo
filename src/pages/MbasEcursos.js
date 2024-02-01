import style from './MbasEcursos.module.css'
import styles from '../components/style/breadcrumb.module.css'
import { Link } from 'react-router-dom'


//imagens cards
import InCompany from '../components/img/incompany.jpg'
import Gestaodeprojetos from '../components/img/gestaodeprojetos.jpg'
import Inovacaosaude from '../components/img/inovacaosaude.jpg'
import Webmobile from '../components/img/webmobile.jpg'
import Card from '../components/Card'


function MbasEcursos(){
    
    const cardStyle = {
        width: '18rem',
        height: '22rem',
        
      };
    
    return (
      <>  <nav className={styles.nav}>
  <ul>
    <Link to="/">
        <li>Home</li>
    </Link>
    <li>/</li> 
    <li>MBAs e cursos</li>
  </ul>
</nav>
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
                <Card
                    caminho={'/MbaEcursos/MbaGp'} img={Gestaodeprojetos} alt={'Gestão de projetos'} titulo={'MBA em Liderança e Inovação na Gestão de Projetos 4.0'} className={style.card}
                 />
                <Card
                    caminho={'/MbaEcursos/MbaSaude'} img={Inovacaosaude} alt={'Inovação em saúde'} titulo={'MBA em Inovação e Negócios em Saúde'} className={style.card}
                 />
                <Card
                    caminho={'/MbaEcursos/MbaEngSW'} img={Webmobile} alt={'Engenharia de software'} titulo={'MBA em Engenharia de Software - ênfase em  Desenvolvimento Mobile e Web 3.0'} className={style.card}
                 />
                <Card
                    caminho={'/MbaEcursos/CursosInCompany'} img={InCompany} alt={'Equipe unida'} titulo={'Cursos '} em={'InCompay'} className={style.card}
                 />
            </div>
        </section>
        </>
    )
}

export default MbasEcursos