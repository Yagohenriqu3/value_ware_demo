import styles from '../style/Apresentacao.module.css'

function Apresentacao(){
    return (
        <div className={styles.apresentacao}>
            <div>
                <h1 className={styles.h1Apresentacao}>Value Ware</h1>
                <h2 className={styles.h2Apresentacao}>
                Sua Consultoria para CO-CRIAÇÃO DE VALOR
                </h2>
            </div>
        </div>)
}

export default Apresentacao
