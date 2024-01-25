import Styles from "./Container.module.css"
import PontoDeInterrogacao from '../../components/img/cursos/pontodeinterrogacao.jpg'
import Gerenciamento from '../../components/img/cursos/gerenciamento.jpg'
import Treinamento from '../../components/img/treinamento.webp'

import { Link } from 'react-router-dom';


function CursosInCompany(){
    
    const estiloBackground = {
        backgroundImage: `url(${Treinamento})`,
       
      };
    
    
    return (
    <section className={`${Styles.container}`}>
        
            <div>
                <div className={`${Styles.intro}`}>
                    <div style={estiloBackground}>
                        <h1>Cursos InCompay</h1>
                    </div>  
                    <p><h1>Sobre</h1>Os cursos InCompany voltados para instituições de ensino superior possuem como objetivo principal capacitar os profissionais que atuam nessas instituições, buscando melhorar seus conhecimentos e habilidades em áreas específicas.  Dentre os principais treinamentos oferecidos estão:</p>
                </div>
                

                <div className={Styles.paraQuemE}>
                <img src={PontoDeInterrogacao} alt="Ponto de interrogação" />
                    <p><h2>Gestão de Riscos</h2>
                        Esse treinamento visa capacitar os profissionais a lidar com os riscos envolvidos em suas atividades, sejam eles financeiros, operacionais ou reputacionais. São abordados temas como identificação, análise, avaliação e tratamento de riscos, visando a tomada de decisões mais assertivas e a minimização de potenciais danos.
                    </p>
                </div>
                <div className={Styles.bloco2}>
                    
                <p><h2>Mapeamento de Processos</h2>
                        O treinamento de mapeamento de processos busca auxiliar os profissionais a entenderem e analisarem os diferentes processos que compõem o funcionamento da instituição, como o processo de matrícula, de administração acadêmica, de gestão financeira, entre outros. Com isso, é possível identificar oportunidades de melhoria, eliminar redundâncias e aumentar a eficiência operacional.
                    </p>
                    <img src={Gerenciamento} alt="Gerentes" />
                </div>
                <div className={Styles.paraQuemE}>
                <img src={PontoDeInterrogacao} alt="Ponto de interrogação" />
                <p><h2>Gestão da Rotina com Ferramentas de Qualidade</h2>
                        O treinamento tem como objetivo apresentar aos profissionais as principais ferramentas da gestão da qualidade, como o PDCA, 5W2H e Acompanhamento de Planos de Ação, além de técnicas de análise e solução de problemas, como o Diagrama de Ishikawa, Diagrama de Pareto e muitos outros. Com essas ferramentas, é possível melhorar a gestão da rotina da instituição, garantindo a entrega de serviços de qualidade e a satisfação dos colaboradores e clientes.
                    </p>
                </div>

                <div className={Styles.bloco2}>
                    
                <p><h2>Gerenciamento de Projetos</h2>
                        O treinamento capacita os profissionais da instituição de ensino superior a gerenciar projetos de forma eficiente, aplicando as melhores práticas do Project Management Institute (PMI®). São abordados temas como definição de escopo, planejamento, execução, monitoramento e controle, além de técnicas de liderança e gestão de equipes. Com isso, é possível garantir a entrega de projetos dentro do prazo, do custo e da qualidade esperados. Todos os treinamentos de Projetos são ministrados por professores certificados pelo PMI®.
                    </p>
                    <img src={Gerenciamento} alt="Gerentes" />
                </div>

                    <p className={Styles.NaoEcontrou}>
                        Não encontrou seu curso? <Link to="/#contatenos">Entre em contato</Link> que criamos a trilha de aprendizagem personalizada para o perfil de sua instituição e colaboradores.
                    </p>

                <button type="button">Saiba mais</button>
            </div>


    
        
    
    
    </section>
    )
    }
export default CursosInCompany