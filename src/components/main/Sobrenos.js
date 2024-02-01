import SobrenosEquipe from '../img/main/equipe.jpg' 
import Style from '../style/Sobrenos.module.css'
import {Link} from 'react-router-dom'

function Sobrenos(){
    return(
    <div className={Style.sobreNos} id='sobrenos'>
       <div className={Style.sobrenosImg}>
       <h1>Sobre-nós</h1>
            <img src={SobrenosEquipe} alt='imagem de um equipe' className={Style.fotoEquipe}/>
        </div>
       <div className={Style.sobrenosTexto}>
           
           <p>A Value Ware oferece serviços personalizados de consultoria em gestão e co-criação de
            valor, nosso foco é compreender profundamente as necessidades específicas do seu
            negócio e desenvolver estratégias eficazes para superar desafios e impulsionar seu
            crescimento, com a facilitação na transformação digital e a geração de valor para seus
            clientes, colaboradores e gestores.</p>
           <Link to='/SobreNos'>Saiba mais</Link>
       </div>
       
    </div>
    )
}

export default Sobrenos