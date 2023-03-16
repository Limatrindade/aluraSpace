import Tags from "../Tags"
import styles from "./Galeria.module.scss"
import fotos from "./fotos.json"
import favorito from "../../assets/favorito.png"
import open from "../../assets/open.png"

function Galeria() {

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.galeria__cards}>
                {fotos.map((fotos) => {
                    return(
                       <li key={fotos.id} className={styles.galeria__card}>
                            <img 
                                className={styles.galeria__imagem}
                                src={fotos.imagem} 
                                alt={fotos.titulo} 
                            /> 
                            <p className={styles.galeria__descricao}>{fotos.tag}</p>
                            <span>
                                <img 
                                    className={styles.iconImg}
                                    src={favorito} 
                                    alt="Ícone coração de curtir" 
                                />
                                <img 
                                    className={styles.iconImg}
                                    src={open} 
                                    alt="Ícone de abrir modal" 
                                />
                            </span>
                       </li> 
                    )
                })}
            </ul>
        </section>
    )
}

export default Galeria