import Apresentacao from '../components/main/Apresentacao.js'
import Sobrenos from '../components/main/Sobrenos.js'
import RedesSociais from '../components/main/RedesSociais.js'
import ConhecaCursos from './ConhecaCursos.js'


function Main (){
    return(
        <main>
            <Apresentacao/>
            <Sobrenos/>
            <RedesSociais /> 
            <ConhecaCursos />
            
        </main>
    )
}

export default Main