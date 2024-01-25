import React, { useState } from 'react'
import Vmo from './Educacao/Vmo'
import Prospeccao from './Educacao/Prospeccao.js'
import Retencao from './Educacao/Retencao.js'
import Otimizacao from './Educacao/Otimizacao.js'
import Treinamentos from './Educacao/Treinamentos.js'
import style from '../../style/StyleConteudo.module.css'

const Educacao = () => {
    const [componenteAtual, setComponenteAtual] = useState('Vmo')
    let componenteRenderizado

    if(componenteAtual === 'Vmo'){
        componenteRenderizado = <Vmo/>
    } else if (componenteAtual === 'Prospeccao'){
        componenteRenderizado = <Prospeccao/>
    } else if (componenteAtual === 'Retencao'){
        componenteRenderizado = <Retencao/>
    } else if (componenteAtual === 'Otimizacao'){
        componenteRenderizado = <Otimizacao/>
    } else if (componenteAtual === 'Treinamentos'){
        componenteRenderizado = <Treinamentos/>
    }

    //alterar estilos dos botoes secundarios
    const [botao1, setBotao1] = useState({
        backgroundColor: '#02351B',
        color: 'white',
    })

    const [botao2, setBotao2] = useState({
        backgroundColor:'White',
        color: '#818181',
    })

    const [botao3, setBotao3] = useState({
        backgroundColor: 'white',
        color: '#818181',
    })

    const [botao4, setBotao4] = useState({
        backgroundColor: 'white',
        color: '#818181',
    })
    
    const [botao5, setBotao5] = useState({
        backgroundColor: 'white',
        color: '#818181',
    })

    const alterarBotao1 = () => {
        setBotao1({
            backgroundColor: '#02351B',
            color: 'white',
        })

        setBotao2({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao3({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao4({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao5({
            backgroundColor: 'white',
            color: '#818181',
        })

    }

    const alterarBotao2 = () => {
        setBotao1({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao2({
            backgroundColor: '#02351B',
            color: 'white',
        })

        setBotao3({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao4({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao5({
            backgroundColor: 'white',
            color: '#818181',
        })

    }

    const alterarBotao3 = () => {
        setBotao1({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao2({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao3({
            backgroundColor: '#02351B',
            color: 'white',
        })

        setBotao4({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao5({
            backgroundColor: 'white',
            color: '#818181',
        })

    }

    const alterarBotao4 = () => {
        setBotao1({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao2({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao3({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao4({
            backgroundColor: '#02351B',
            color: 'white',
        })

        setBotao5({
            backgroundColor: 'white',
            color: '#818181',
        })

    }

    const alterarBotao5 = () => {
        setBotao1({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao2({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao3({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao4({
            backgroundColor: 'white',
            color: '#818181',
        })

        setBotao5({
            backgroundColor: '#02351B',
            color: 'white',
        })
    }
    //-----------------------------------------//

    

    return (
        <div className={style.botoes}>
                <button style={botao1} onClick={() => {setComponenteAtual('Vmo'); alterarBotao1()}}>Value Management Officer (VMO)</button>
               
               <button style={botao2} onClick={() => {setComponenteAtual('Prospeccao'); alterarBotao2()}}>Prospecção de polos parceiros e melhoria de resultados</button>
               
                <button style={botao3} onClick={() => {setComponenteAtual('Retencao'); alterarBotao3()}}>Retenção e Ampliação de Base de Alunos</button>
               
                <button style={botao4} onClick={ () => {setComponenteAtual('Otimizacao'); alterarBotao4()}}>Otimização Docente</button>
                
                <button style={botao5} onClick={ () => {setComponenteAtual ('Treinamentos'); alterarBotao5()}}>Treinamentos InCompany</button>

                <div className={style.conteudo}>{componenteRenderizado}</div>
        </div>
    )
}

export default Educacao