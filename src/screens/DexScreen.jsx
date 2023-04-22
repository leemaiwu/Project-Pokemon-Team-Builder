import React, { useState } from 'react'

import PokedexCard from '../components/PokedexCard'

const DexScreen = ({pokemon}) => {

    // const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState('')

    const searchHandler = (event) => setSearch(event.target.value.toLowerCase())

    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    //     .then((res) => {
    //         let newState = res.data.results.map((item, index) => {
    //             item.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    //             return item
    //         })
    //         setPokemon(newState)
    //     })
    // }, [])

    const pokemonDisplay = pokemon
    .filter((poke, index) => {
        return poke.name.includes(search)
    })
    .map((poke, index) => {
        return <PokedexCard key={index} poke={poke} index={index} />
    })

    return (
        <div>
            <h1>Pokedex</h1>
            <div className='search-field'>
                <input type='text' placeholder='Search' onChange={searchHandler} />
            </div>
            <div className='row-container' >
                {pokemonDisplay}
            </div>
        </div>
    )
}

export default DexScreen
