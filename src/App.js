import React, { useState, useEffect } from 'react'

import './App.css';
import axios from 'axios';
import Header from './components/Header'
import TeamScreen from './screens/TeamScreen'
import DexScreen from './screens/DexScreen'

function App() {

  const [pokemon, setPokemon] = useState([])
  const [teamPage, setTeamPage] = useState(false)

  const changePage = (value) => {
    if (teamPage === value) return
    setTeamPage(value)
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    .then((res) => {
        let newState = res.data.results.map((item, index) => {
            item.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            return item
        })
        setPokemon(newState)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='row-container'>
        <button className='button' onClick={() => changePage(true)} >Team</button>
        <button className='button' onClick={() => changePage(false)} >Dex</button>
        {teamPage ? <TeamScreen /> : <DexScreen pokemon={pokemon} />}
      </div>
    </div>
  )
}

export default App;
