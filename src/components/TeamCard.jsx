import React from 'react'

const TeamCard = ({pokemon, removeHandler}) => {

  return (
    <div className='card'>
        <img alt='pokemon' className='poke-img' src={pokemon.sprites.other['official-artwork'].front_default} />
        <h4>{pokemon.name}</h4>
        <div className='type-container'>
            {pokemon.types.map((t, i) => <h4 className={`type ${t.type.name}`} key={i}>{t.type.name}</h4>)}
        </div>
        <div className='stat-container'>
            {pokemon.stats.map((s,i) => <h5 className='stat' key={i}>{s.stat.name} {s.base_stat}</h5>)}
        </div>
        <button className='card-button' onClick={removeHandler}>Remove</button>
    </div>
  )
}

export default TeamCard
