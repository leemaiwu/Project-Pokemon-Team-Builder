import React, { useContext } from 'react'
import axios from 'axios'

import GlobalContext from '../state/GlobalContext'

const PokedexCard = (props) => {

    const {dispatch} = useContext(GlobalContext)

    const addToTeam = () => {
        axios
            .get(props.poke.url)
            .then((res) => {
                // console.log(res.data)
                dispatch({type: 'ADD_TO_TEAM', payload: res.data})
            })
    }

    return (
        <div className='card' >
            <img alt='Pokemon' src={props.poke.img} />
            <h3>{props.poke.name}</h3>
            <button onClick={addToTeam} className='card-button'>Add to Team</button>
        </div>
    )
}

export default PokedexCard
