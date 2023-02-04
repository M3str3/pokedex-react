import styles from './styles.module.css'
import Pokedex from '../../assets/pokedex.png'

const LoadingScreen = () => {
    return(
        <div className={styles.loadingScreen}>
        <img className={styles.loadingScreenIcon} src={Pokedex} alt="pokedex" />
        </div>
    )
}

export default LoadingScreen