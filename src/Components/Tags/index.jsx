import styles from "./Tags.module.scss"

function Tags() {
    return (
        <div className={styles.tags}>
            <p>Busque por tags:</p>
            <ul className={styles.tags__lista}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}

export default Tags