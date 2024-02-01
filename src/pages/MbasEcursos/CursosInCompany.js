import Styles from "./Container.module.css"
import style from '../../components/style/breadcrumb.module.css'
import Treinamento from '../../components/img/treinamento.webp'
import Desempenho from '../../components/img/cursos/desempenho.jpg'
import Gestaoderiscos from '../../components/img/cursos/gestaoderiscos.jpg'
import Gerenciamentodeprojeto from '../../components/img/cursos/gerenciamentodeprojeto.jpg'
import Gestaoderotina from '../../components/img/cursos/gestaoderotina.jpg'

import { Link } from 'react-router-dom';


function CursosInCompany(){
    
    const estiloBackground = {
        backgroundImage: `url(${Treinamento})`,
        backgroundPosition: 'center 20%',
       
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
    <li>Cursos InCompany</li>
  </ul>
</nav>
                <div className={`${Styles.intro}`}>
                    <div style={estiloBackground}>
                        <h1>Cursos <em>InCompay</em></h1>
                    </div>  
                    <p><h1>Sobre</h1>Os cursos <em>InCompany</em> voltados para instituições de ensino superior possuem como objetivo principal capacitar os profissionais que atuam nessas instituições, buscando melhorar seus conhecimentos e habilidades em áreas específicas.  Dentre os principais treinamentos oferecidos estão:</p>
                </div>
                

                <div className={Styles.paraQuemE}>
                <img src={Gestaoderiscos} alt="Ponto de interrogação" />
                    <p><h2>Gestão de Riscos</h2>
                        Esse treinamento visa capacitar os profissionais a lidar com os riscos envolvidos em suas atividades, sejam eles financeiros, operacionais ou reputacionais. São abordados temas como identificação, análise, avaliação e tratamento de riscos, visando a tomada de decisões mais assertivas e a minimização de potenciais danos.
                    </p>
                </div>

                <div className={Styles.bloco2}>
                    
                <p><h2>Mapeamento de Processos</h2>
                        O treinamento de mapeamento de processos busca auxiliar os profissionais a entenderem e analisarem os diferentes processos que compõem o funcionamento da instituição, como o processo de matrícula, de administração acadêmica, de gestão financeira, entre outros. Com isso, é possível identificar oportunidades de melhoria, eliminar redundâncias e aumentar a eficiência operacional.
                    </p>
                    <img src={Desempenho} alt="Desempenho" />
                </div>

                <div className={Styles.paraQuemE}>
                <img src={Gestaoderotina} alt="Gestão de rotinas" />
                <p><h2>Gestão da Rotina com Ferramentas de Qualidade</h2>
                        O treinamento tem como objetivo apresentar aos profissionais as principais ferramentas da gestão da qualidade, como o PDCA, 5W2H e Acompanhamento de Planos de Ação, além de técnicas de análise e solução de problemas, como o Diagrama de Ishikawa, Diagrama de Pareto e muitos outros. Com essas ferramentas, é possível melhorar a gestão da rotina da instituição, garantindo a entrega de serviços de qualidade e a satisfação dos colaboradores e clientes.
                    </p>
                </div>

                <div className={Styles.bloco2}>
                    
                <p><h2>Gerenciamento de Projetos</h2>
                        O treinamento capacita os profissionais da instituição de ensino superior a gerenciar projetos de forma eficiente, aplicando as melhores práticas do Project Management Institute (PMI®). São abordados temas como definição de escopo, planejamento, execução, monitoramento e controle, além de técnicas de liderança e gestão de equipes. Com isso, é possível garantir a entrega de projetos dentro do prazo, do custo e da qualidade esperados. Todos os treinamentos de Projetos são ministrados por professores certificados pelo PMI®.
                    </p>
                    <img src={Gerenciamentodeprojeto} alt="Gerenciamento de projetos" />
                </div>

                    <p className={Styles.NaoEcontrou}>
                        Não encontrou seu curso? <Link to="/Contate-nos">Entre em contato</Link> que criaremos a trilha de aprendizagem personalizada para o perfil de sua instituição e colaboradores.
                    </p>

                <Link to={'/Contate-nos'}><button type="button">Saiba mais</button></Link>
            


    
        
    
    
    </section>
    )
    }
export default CursosInCompany