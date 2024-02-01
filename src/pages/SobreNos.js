import styles from '../components/style/breadcrumb.module.css'
import style from './SobreNospage.module.css'
import EquipeImage from '../components/img/main/equipe.jpg'
import Valores from '../components/main/Valores'
import SatisfacaoImage from '../components/img/satisfacao.webp'

import { Link } from 'react-router-dom'




function SobreNos(){
    return ( 
    <>
        <nav className={styles.nav}>
  <ul>
    <Link to="/">
        <li>Home</li>
    </Link>
    <li>/</li>
        <li>Sobre nós</li>
   
     
  </ul>
</nav>

        <section className={`${style.sobreNos}`}>
        
            <article>
                <div className={style.titulo}>
                    <h1>Sobre nós</h1>
                </div>

                 
                

                <div className={style.equipe}>
                    <p><h2>Value Ware: Sua Consultoria para CO-CRIAÇÃO DE VALOR</h2>Somos uma equipe de especialistas, prontos para ajudar sua instituição a alcançar o sucesso desejado co-criando valor. Nossa abordagem baseia-se em compreender profundamente as necessidades específicas do seu negócio e desenvolver estratégias eficazes para superar desafios e impulsionar seu crescimento, com o desenvolvimento e melhoria de processos e produtos e a facilitação da transformação digital, com foco na geração de valor identificando oportunidades de otimização de processos, redução de desperdícios (Lean), expansão e novos mercados para entregas de valor.</p>
                    <img src={EquipeImage} alt='equipe de pessoas' />
                </div>

                
                <Valores />
                <div className={style.equipe}>
                <img src={SatisfacaoImage} alt='Pessoas satisfeitas' />
                <p><h2>CO-CRIAÇÃO DE VALOR</h2>O valor é um conceito subjetivo que pode ser definido de diversas formas. Em geral, o valor é considerado como a percepção que um indivíduo ou organização tem de que algo é útil, importante ou desejável. No contexto empresarial, o valor pode ser definido como o que um cliente está disposto a pagar por um produto ou serviço. A co-criação de valor pode ajudar as empresas a criar produtos e serviços que tenham mais valor para os clientes. Isso pode levar a um aumento nas vendas, na satisfação do cliente e na lucratividade da empresa.</p>
                    
                </div>
                
            </article>
        </section>
        </>  
    )
    
}

export default SobreNos