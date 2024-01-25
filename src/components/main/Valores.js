import style from '../style/Valores.module.css'

function Valores (){
    return(
        
            <section className={style.container}>
        <h1>Princípios e Valores</h1>
        <div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Ética e transparência</li>
                    <li className="list-group-item">Foco no valor</li>
                    <li className="list-group-item">Comece onde você está</li>
                    <li className="list-group-item">Progrida iterativamente com feedback
                    </li>
            
                  </ul>
            </div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Colabore e promova visibilidade</li>
                    <li className="list-group-item">Pense e trabalhe holisticamente</li>
                    <li className="list-group-item">Simplicidade e praticidade</li>
                    <li className="list-group-item">Otimize e automatize</li>
            
                  </ul>
            </div>
        </div>
       
    </section>
        
    )
}

export default Valores