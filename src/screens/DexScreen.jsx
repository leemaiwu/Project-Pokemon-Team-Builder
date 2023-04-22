import React, { useState } from 'react'

import PokedexCard from '../components/PokedexCard'

const DexScreen = ({pokemon}) => {

    const [search, setSearch] = useState('')

    const searchHandler = (event) => setSearch(event.target.value.toLowerCase())

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
