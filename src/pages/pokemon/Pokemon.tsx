import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import styles from './pokemon.module.css'
import PokeballImg from '../../assets/pokeball.png'
import { Footer } from '../../components';
import { PokemonDetails } from '../../types/types';
import { fetchPokemon } from '../../api/fetchPokemon';
import LoadingScreen from '../../components/loadingScreen/loadingScreen';
import 'bootstrap/dist/css/bootstrap.css';

const Pokemon = () => {
    const [isLoading,SetLoading] = useState(false);
    const [ pokemon, setPokemon ] = useState<PokemonDetails>()
    const { name } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
            SetLoading(true)
            const FetchPokemon = await fetchPokemon(name?.toLowerCase() as string)
            setPokemon(FetchPokemon)
            SetLoading(false)
        }
        getPokemon()
    },[name])

    if (isLoading || !pokemon) return <div><LoadingScreen/></div>

    return( 
    <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="" /> go back
    </button>
        <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
                <div className={styles.pokemonTitle}>{pokemon?.name}</div>
                <div>Nr. {pokemon?.id}</div>
                <div>
                    <img className={styles.pokemonInfoImage} src={pokemon?.imgSrc} alt="" />
                </div>
            <div>HP: {pokemon?.hp}</div> 
            <div>Attack: {pokemon?.attack}</div>
            <div>Defense: {pokemon?.defense}</div>
            <div className={styles.Skills}>
            <h3>Skills</h3>
            <div className="row ">
            {pokemon?.moves?.map( ( move,index ) => { return <div className="col-3 col-md-2">{index+1}. <a href={move.move.url} className={styles.Skill}>{move.move.name}</a> </div> } ) }
            </div>
            </div>
            </main>
        </div>
    <Footer/>
    </>
    )
}

export default Pokemon