import React, { useState } from 'react'
import Saude from '../main/nossosServicos/Saude.js'
import Educacao from '../main/nossosServicos/Educacao.js'
import Style from '../style/NossosServicos.module.css'
import ImgSaude from '../img/main/gestaomedicina.jpg'
import ImgEducacao from '../img/main/gestaoeducacao.jpg'



const NossosServicos = () =>{
   
    const [componenteAtual, setComponenteAtual] = useState('Saude')
    let componenteRenderizado

    if (componenteAtual === 'Saude'){
        componenteRenderizado = <Saude/>
        } else if (componenteAtual === 'Educacao'){
            componenteRenderizado = <Educacao/>
        } else{
            componenteRenderizado = <div>Componente não encontrado</div>
        }
        
        //esse bloco alterna as cores dos cards saude e educacao
        const [estiloBotao1, setEstiloBotao1]
        = useState({
          backgroundColor: '#02351B',
          color: 'white',
        });

        const [estiloBotao2, setEstiloBotao2]= useState({
              backgroundColor: 'white',
              color: 'black',
            })
      
            const alterarEstilo1 = () => {
             setEstiloBotao1({
              backgroundColor: '#02351B',
              color: 'white',
              })
            setEstiloBotao2({
                backgroundColor: 'white',
                color: '#818181',
            })
            }
          
            const alterarEstilo2 = () => {
              setEstiloBotao2({
                backgroundColor: '#02351B',
                color: 'white',
              })
              setEstiloBotao1({
                backgroundColor: 'white',
                color: '#818181',
              })
            }
            //---------------------------------------------

    return(
        <div className={Style.NossosServicos} id='nossosservicos'> 
           <h1>Nossos Serviços</h1>
            <button className={Style.btnP}
            style={estiloBotao1}
            onClick={() => {setComponenteAtual('Saude'); alterarEstilo1()}}>
            <div><img src={ImgSaude} alt='Duas pessoas analisando um gráfico'/></div>
                Saúde
            </button>             
             
            <button className={Style.btnP}
            style={estiloBotao2}
            onClick={() => {setComponenteAtual('Educacao'); alterarEstilo2()}}>
            <div><img src={ImgEducacao} alt='Duas pessoas analisando um gráfico'/></div>
                Educação
            </button> 
            

            <div>{componenteRenderizado}</div>
        </div>
    )

}

export default NossosServicos