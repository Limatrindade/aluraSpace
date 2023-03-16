import logoFoto from './logo.png'
import iconeFoto from './search.png'
import styles from'./Cabecalho.module.scss'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logoFoto} alt="Logo do alura space" />
            <div className={styles.cabecalho__container}>
                <input 
                    className={styles.cabecalho__input}
                    type="text"
                    placeholder="O que você procura?" 
                />
                <img src={iconeFoto} alt="ícone da lupa" />
            </div>
        </header>
    )
}

export default Cabecalho