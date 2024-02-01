
import breadcrumb from '../components/style/breadcrumb.module.css'
import style from './Vmo.module.css'
import VmoImage from '../components/img/vmo.jpg'
import { Link } from 'react-router-dom'


function Vmo(){
    return (
        <section className={`${style.vmo} `}>
        
        <nav className={breadcrumb.nav}>
  <ul>
    <Link to="/">
        <li>Home</li>
    </Link>
    <li>/</li>
        <li>Value Management Officer (VMO)</li>
   
    
  </ul>
</nav>
            <div className={style.titulo}>
                    <h1>Value Management Officer (VMO)</h1>
                </div>
                 
                     <div className={style.divConteudo}>
                         <div>
                             <img src={VmoImage} alt="Grupo de pessoas analizando dados" />
                         </div>
                                     <div className={style.texto}>
                                         <p className={style.textop}><strong>O VMO (Value Management Officer)</strong> é uma evolução do PMO que coloca a entrega de valor ao
                                        cliente no centro de todas as atividades e de sua estratégia. O VMO não se limita a padronizar
                                        processos, mas também atua como um facilitador da inovação e da colaboração.</p>
                                         <p className={style.textop}>A transição para o VMO é uma oportunidade para as empresas se tornarem mais competitivas
                                        e relevantes no mercado atual. O VMO encoraja a experimentação, a agilidade e a adaptação
                                        às mudanças de forma mais dinâmica e pode ajudar as empresas a entregar projetos que
                                        geram valor para a organização, os clientes e a sociedade.
                                        </p>
                                        <h2>Somos especializados em:</h2>
    
                                        <ul className={style.lista}>
                                            <li>Gestão Operacional e da Rotina</li>
                                            <li>Identificação de Oportunidades e Ameaças</li>
                                            <li>Gestão de Projetos e Portfólio</li>
                                            <li>Gestão Preditiva e Ágil</li>
                                            <li>Redesenho e Otimização de Processos</li>
                                            <li>Transformação Digital</li>
                                            <li>Identificação de Novos Negócios</li>
                                        </ul>
                                     </div>
                     </div>

                             
                                 
               
        </section>
    )
}

export default Vmo