import { useState, useEffect } from 'react';
import {  Header, Footer } from '../../components/index';
import {Link} from 'react-router-dom'
import styles from './pokemons.module.css'
import { fetchPokemons } from '../../api/fetchPokemons';
import { Pokemon } from '../../types/types';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';

const Pokemons = () => {

    const [query,setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading,setLoading] = useState(false)

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setLoading(true)
            const allPokemons = await fetchPokemons()
            setPokemons(allPokemons)
            setLoading(false)
        }
        fetchAllPokemons();
    },[])

    if (isLoading || !pokemons){
        return <LoadingScreen/>
    }

    const filterPokemons = pokemons?.slice(0,150).filter((pokemon)=> {return pokemon.name.toLowerCase().match(query.toLowerCase())})

    return( 
    <>
    <Header query={query} setQuery={setQuery} />
    <main>
        <nav>
            {filterPokemons?.slice(0,151).map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemons/${pokemon.name.toLowerCase()}`} className={styles.listItem} >
            <img src={pokemon.imgSrc} className={styles.listItemIcon} />
            <div className={styles.listItemText}>
                    <span>{pokemon.name}</span>
                    <span>{pokemon.id}</span>
                </div>
            </Link>
                 ))}

        </nav>
    </main>
    <Footer/>
    </>
    )
}

export default Pokemons