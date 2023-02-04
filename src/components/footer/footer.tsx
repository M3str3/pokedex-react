import { Link } from "react-router-dom"
import styles from './footer.module.css'

//assets
import PokemonPic from '../../assets/pikachu.png'
import LocationPic from '../../assets/pointer.png'
import ItemsPic from '../../assets/pokeball.png'

const Footer = () => {
    
    return (
    <footer  className={styles.footer}>
        <Link to="/pokemons" className={styles.footerLink}>
            <img src={PokemonPic} alt="Pokeball" className={styles.footerIcon} />
            Pokemons
        </Link>
        <Link to="/items" className={styles.footerLink}>
            <img src={ItemsPic} alt="Pokeball" className={styles.footerIcon}/>
            Items<br/>No disponible
        </Link>
        <Link to="/pokemons" className={styles.footerLink}>
            <img src={LocationPic} alt="Pokeball" className={styles.footerIcon}/>
            Pokemons
        </Link>
    </footer>
    )
}

export default Footer