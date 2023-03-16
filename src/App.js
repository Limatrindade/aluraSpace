import './styles/estilosGlobais.scss';
import Cabecalho from './Components/Cabecalho';
import Menu from './Components/Menu'
import fotoBanner from './assets/banner.png'
import styles from './styles/PaginaInicial.module.scss'
import Rodape from './Components/Rodape';
import Galeria from './Components/Galeria';
import Populares from './Components/Populares';

function App() {
  return (
    <>
      <Cabecalho />
      <section className={styles.principal}>
        <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={fotoBanner} alt='A imagem da terra vista do espaço'/>
          </div>
      </section>
      <div className={styles.abas}>
        <Galeria />
        <Populares />
      </div>
      <Rodape />
    </>
  );
}

export default App;
