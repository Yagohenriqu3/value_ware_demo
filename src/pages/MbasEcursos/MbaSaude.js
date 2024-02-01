import Styles from "./Container.module.css"
import style from '../../components/style/breadcrumb.module.css'
import { Link } from 'react-router-dom'
import PontoDeInterrogacao from '../../components/img/cursos/pontodeinterrogacao.jpg'
import Gerenciamento from '../../components/img/cursos/gestaoderotina.jpg'
import Gerenciamentosaude from '../../components/img/cursos/gerenciamentosaude.webp'
import SaibamaisBotaoExterno from "./SaibamaisBotaoExterno"


function CursosInCompany(){
    
    const estiloBackground = {
        backgroundImage: `url(${Gerenciamentosaude})`,
       
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
    <li>Inovação e Negócios em Saúde</li>
  </ul>
</nav>
        
            <div>
                <div className={`${Styles.intro}`}>
                    <div style={estiloBackground}>
                        <h1>MBA</h1>
                        <h2>Inovação e Negócios em Saúde</h2>
                    </div>


                    <p><h1>Sobre</h1>O MBA em Inovação e Negócios em Saúde 4.0 é um curso de pós-graduação que oferece uma formação completa e atualizada para profissionais que desejam se destacar no mercado de saúde. Com uma grade curricular inovadora e estruturada, o curso tem como objetivo capacitar os alunos nas áreas de Branding, Gestão, Inovação e Telessaúde, preparando-os para os desafios da área da saúde na era 4.0.
                    Com uma abordagem inovadora para a área da saúde e uma estrutura moderna e atualizada, o curso tem como objetivo capacitar profissionais da saúde para atuarem de forma estratégica e criativa, promovendo mudanças no cenário do mercado e desenvolvendo novos negócios no setor.
                    </p>
                    
                </div>

                <div className={Styles.paraQuemE}>
                <img src={PontoDeInterrogacao} alt="Ponto de interrogação" />
                        
                            <p><h2>Para quem é? </h2>O MBA Liderança e Inovação na Gestão de Projetos 4.0 é voltado para profissionais que desejam se destacar no mercado por meio do desenvolvimento de habilidades de liderança e gerenciamento de projetos, alinhando-os às novas tecnologias e tendências de mercado. - É indicado para profissionais de diversas áreas que desejam aprimorar seus conhecimentos em gestão de projetos e negócios, como gerentes, líderes de equipe, empreendedores e gestores de empresas.
                            </p>
                        
                        
                    
                </div>

                <div className={Styles.bloco2}>
                    
                    <p><h2>"Transformação Empresarial: MBA Inovador Preparando Líderes para os Desafios da Atualidade Corporativa"</h2>Seja você um gerente, coordenador, empreendedor ou atuando em áreas como marketing, finanças, tecnologia ou recursos humanos, este MBA irá prepará-lo para enfrentar os desafios do mundo corporativo atual de forma inovadora e competitiva. Com uma abordagem prática e focada em resultados, os alunos irão desenvolver habilidades fundamentais para construir e liderar times de alta performance, criar valor para negócios e projetos, gerir de forma eficaz projetos e produtos, e se preparar para a transformação digital e a indústria 4.0.</p>
                    <img src={Gerenciamento} alt="Gerentes" />
                </div>
                <div>
                <iframe width="800" height="450" src="https://www.youtube.com/embed/C03ta07yOUE?si=6ib6-WjkaejFgbGd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <SaibamaisBotaoExterno
                link={'https://www.unisuam.edu.br/pos/mba-em-inovacao-e-negocios-em-saude-4-0'} 
                    
                />
            </div>


    
        
    
    
    </section>
    )
    }
export default CursosInCompany