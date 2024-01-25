import styles from '../components/style/Container.module.css'
import style from './Vmo.module.css'

import VmoImage from '../components/img/vmo.jpg'


function Vmo(){
    return (
        <section className={`${style.vmo} ${styles.container} `}>
            <div className={style.titulo}>
                    <h1>Value Management Officer (VMO)</h1>
                </div>
                 
                     <div className={style.divConteudo}>
                         <div>
                             <img src={VmoImage} alt="Grupo de pessoas analizando dados" />
                         </div>
                                     <div className={style.texto}>
                                         <p className={style.textop}>O tradicional PMO (Project Management Office) tem como foco a execução de projetos, seguindo um conjunto de processos e metodologias padronizadas. No entanto, em um mundo cada vez mais competitivo e dinâmico, as empresas precisam de uma abordagem mais ágil e centrada no valor para o gerenciamento de projetos.</p>
                                         <p className={style.textop}>O VMO (Value Management Officer) é uma evolução do PMO que coloca a entrega de valor ao cliente no centro de todas as atividades e de sua estratégia. O VMO não se limita a padronizar processos, mas também atua como um facilitador da inovação e da colaboração.</p>
                                         <p className={style.textop}>A transição para o VMO é uma oportunidade para as empresas se tornarem mais competitivas e relevantes no mercado atual. O VMO encoraja a experimentação, a agilidade e a adaptação às mudanças de forma mais dinâmica e pode ajudar as empresas a entregar projetos que geram valor para a organização, os clientes e a sociedade.</p>
                                     </div>
                     </div>

                             
                                 
               
        </section>
    )
}

export default Vmo