import React, { useState } from 'react'
import Preparacao from './Saude/Preparacao.js'
import VmoSaude from './Saude/VmoSaude.js'
import Treinamentos from './Saude/TreinamentosSaude.js'
import style from '../../style/StyleConteudo.module.css'


const Saude = () => {
   const [componenteAtual, setComponenteAtual] = useState('Preparacao')
   let componenteRenderizado

   if(componenteAtual === 'Preparacao'){
    componenteRenderizado = <Preparacao/>

   } else if (componenteAtual === 'VmoSaude'){
    componenteRenderizado = <VmoSaude/>

   } else if (componenteAtual === 'Treinamentos'){
    componenteRenderizado = <Treinamentos/>
   }

   //alterar estilos dos botoes secundarios
   const [botao1, setBotao1] = useState({
    backgroundColor: '#02351B',
    color: 'white',
   })

   const [botao2, setBotao2] = useState({
    backgroundColor: 'white',
    color: '#818181',
   })

   const [botao3, setBotao3] = useState({
    backgroundColor: 'white',
    color: '#818181',
   })

   const AlterarBotao1 = () => {
    setBotao1 ({
        backgroundColor: '#02351B',
        color: 'white'
    })

    setBotao2({
        backgroundColor: 'white',
        color:'#818181',
    })

    setBotao3({
        backgroundColor: 'white',
        color:'#818181'
    })
   }

   const AlterarBotao2 = () => {
    setBotao1({
        backgroundColor: 'white',
        color: '#818181',
    })

    setBotao2({
        backgroundColor:'#02351B',
        color: 'white',
    })

    setBotao3({
        backgroundColor: 'white',
        color: '#818181',
    })
   }

   const AlterarBotao3 =() => {
    setBotao1 ({
        backgroundColor: 'white',
        color: '#818181',
    })

    setBotao2 ({
        backgroundColor: 'white',
        color: '#818181',
    })

    setBotao3 ({
        backgroundColor: '#02351B',
        color: 'white',
    })
   }
   //------------------------------------//

   
    return (
        <div className={style.botoes}>
            
            <button style={botao1} onClick = {() => {setComponenteAtual('Preparacao'); AlterarBotao1()}}>Preparação para Acreditação</button>
            <button style={botao2} onClick = {() => {setComponenteAtual('VmoSaude'); AlterarBotao2()}}>Value Management Officer (VMO)</button>
            <button style={botao3} onClick = {() => {setComponenteAtual ('Treinamentos'); AlterarBotao3()}}>Treinamentos InCompany</button>
            
            <div className={style.conteudo}>{componenteRenderizado}</div>
        </div>
    )
}

export default Saude