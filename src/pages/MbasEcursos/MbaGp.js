import Styles from "./Container.module.css"
import PontoDeInterrogacao from '../../components/img/cursos/pontodeinterrogacao.jpg'
import Gerenciamento from '../../components/img/cursos/gerenciamento.jpg'
import Liderancaeinovacao from '../../components/img/cursos/liderancaeinovacao.jpg'


function CursosInCompany(){
    
    const estiloBackground = {
        backgroundImage: `url(${Liderancaeinovacao})`,
       
      };
    
    
    return (
    <section className={`${Styles.container}`}>
        
            <div>
                <div className={`${Styles.intro}`}>
                    <div style={estiloBackground}>
                        <h1>MBA</h1>
                        <h2>Liderança e Inovação na Gestão de Projetos 4.0</h2>
                    </div>


                    <p><h1>Sobre</h1>O MBA em Liderança e Inovação na Gestão de Projetos 4.0 é um curso de pós-graduação completo e atualizado, que proporciona aos alunos conhecimentos essenciais para liderar e inovar em projetos de forma estratégica e eficiente. Este curso é ideal para profissionais que desejam se destacar no mercado de trabalho e assumir posições de liderança na gestão de projetos.</p>
                    
                </div>

                <div className={Styles.paraQuemE}>
                <img src={PontoDeInterrogacao} alt="Ponto de interrogação" />
                        
                            <p><h2>Para quem é? </h2>O MBA Liderança e Inovação na Gestão de Projetos 4.0 é voltado para profissionais que desejam se destacar no mercado por meio do desenvolvimento de habilidades de liderança e gerenciamento de projetos, alinhando-os às novas tecnologias e tendências de mercado. - É indicado para profissionais de diversas áreas que desejam aprimorar seus conhecimentos em gestão de projetos e negócios, como gerentes, líderes de equipe, empreendedores e gestores de empresas.</p>
                        
                        
                    
                </div>

                <div className={Styles.bloco2}>
                    
                    <p><h2>"Transformação Empresarial: MBA Inovador Preparando Líderes para os Desafios da Atualidade Corporativa"</h2>Seja você um gerente, coordenador, empreendedor ou atuando em áreas como marketing, finanças, tecnologia ou recursos humanos, este MBA irá prepará-lo para enfrentar os desafios do mundo corporativo atual de forma inovadora e competitiva. Com uma abordagem prática e focada em resultados, os alunos irão desenvolver habilidades fundamentais para construir e liderar times de alta performance, criar valor para negócios e projetos, gerir de forma eficaz projetos e produtos, e se preparar para a transformação digital e a indústria 4.0.</p>
                    <img src={Gerenciamento} alt="Gerentes" />
                </div>
                <div>
                <iframe width="800" height="450" src="https://www.youtube.com/embed/D9_HV3fC7to?si=xC0Qr_nsBAerqwMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <button type="button">Saiba mais</button>
            </div>


    
        
    
    
    </section>
    )
    }
export default CursosInCompany