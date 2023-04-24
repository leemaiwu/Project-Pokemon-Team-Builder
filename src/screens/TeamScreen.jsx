import React, { useContext, useMemo } from 'react'
import GlobalContext from '../state/GlobalContext'

import TeamCard from '../components/TeamCard'

const TeamScreen = () => {

    const {state, dispatch} = useContext(GlobalContext)

    const removeFromTeam = (pokemon) => {
        return dispatch({type: 'REMOVE_FROM_TEAM', payload: pokemon})
    }

    const displayTeam = useMemo(() => state.team.map((p, index) => {
        return <TeamCard index={index} pokemon={p} key={index} removeHandler={() => removeFromTeam(p)} />
    }), [state.team])

    return (
        <div>
            <h1>My Team</h1>
            <div className='row-container' >
                {displayTeam}
            </div>
        </div>
    )
}

export default TeamScreen
