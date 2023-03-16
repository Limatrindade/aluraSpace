import iconeHome from '../../assets/home-ativo.png'
import iconeVistas from '../../assets/mais-vistas-inativo.png'
import iconeCurtidas from '../../assets/mais-curtidas-inativo.png'
import iconeNovas from '../../assets/novas-inativo.png'
import iconeSupreenda from '../../assets/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul  className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={iconeHome} alt="Ícone da home" />
                    <a href="/">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={iconeVistas} alt="Ícone dos mais vistos" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={iconeCurtidas} alt="Ícone das mais curtidas" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={iconeNovas} alt="Ícone das novas" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={iconeSupreenda} alt="Ícone do supreenda-me" />
                    <a href="/">Supreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu