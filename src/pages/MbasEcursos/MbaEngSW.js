import Styles from "./Container.module.css"
import style from '../../components/style/breadcrumb.module.css'
import { Link } from 'react-router-dom'
import PontoDeInterrogacao from '../../components/img/cursos/pontodeinterrogacao.jpg'
import Gerenciamento from '../../components/img/cursos/gestaoderotina.jpg'
import Programacao from '../../components/img/programacao.webp'
import SaibamaisBotaoExterno from "./SaibamaisBotaoExterno"


function CursosInCompany(){
    
    const estiloBackground = {
        backgroundImage: `url(${Programacao})`,
       
      };
    
    
    return (
    <section className={`${Styles.container}`}>
   <nav className={style.nav}>
  <ul>
    <Link to="/">
        <li>Home</li>
    </Link>
    <li>/</li>
    <Link to="/MbaEcursos">
        <li>MBAs e cursos</li>
    </Link>
    <li>/</li>
    <li>Engenharia de Software</li>
  </ul>
</nav>
        
            <div>
                <div className={`${Styles.intro}`}>
                    <div style={estiloBackground}>
                        <h1>MBA</h1>
                        <h2>Engenharia de Software - ênfase em Desenvolvimento Mobile e Web 3.0</h2>
                    </div>
                    

                    <p><h1>Sobre</h1>O MBA em Engenharia de Software com ênfase em Desenvolvimento Mobile e Web 3.0 é um curso de pós-graduação voltado para profissionais da área de tecnologia e desenvolvimento de produtos digitais. Com uma estrutura inovadora e completa, aborda temas como engenharia de software avançada, desenvolvimento web e mobile, blockchain, inteligência artificial, internet das coisas, gerenciamento </p>
                    
                </div>

                <div className={Styles.paraQuemE}>
                <img src={PontoDeInterrogacao} alt="Ponto de interrogação" />
                        
                            <p><h2>Para quem é? </h2>Este curso é ideal para profissionais de todas as áreas que desejam se destacar no mercado de tecnologia e desenvolvimento de software. Pode ser cursado por administradores, engenheiros, programadores ou qualquer profissional que busca aprender e aprimorar suas habilidades e conhecimentos em uma das áreas mais promissoras do mercado.</p>
                        
                        
                    
                </div>

                <div className={Styles.bloco2}>
                    
                    <p><h2>"Transformação Empresarial: MBA Inovador Preparando Líderes para os Desafios da Atualidade Corporativa"</h2>Seja você um gerente, coordenador, empreendedor ou atuando em áreas como marketing, finanças, tecnologia ou recursos humanos, este MBA irá prepará-lo para enfrentar os desafios do mundo corporativo atual de forma inovadora e competitiva. Com uma abordagem prática e focada em resultados, os alunos irão desenvolver habilidades fundamentais para construir e liderar times de alta performance, criar valor para negócios e projetos, gerir de forma eficaz projetos e produtos, e se preparar para a transformação digital e a indústria 4.0.</p>
                    <img src={Gerenciamento} alt="Gerentes" />
                </div>
                <div>
                <iframe width="800" height="450" src="https://www.youtube.com/embed/-NAtxw_0azY?si=S3dRJakayqYMC8dz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
                <SaibamaisBotaoExterno
                 link={'https://www.unisuam.edu.br/pos/mba-em-engenharia-de-software-com-enfase-em-desenvolvimento-mobile-e-web-3-0'}
                 />
            </div>


    
        
    
    
    </section>
    )
    }
export default CursosInCompany