import { createContext, useReducer } from 'react'

const initialState = {
    team: [],
    pokedex: []
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {

    const reducer = (state, action) => {
        switch(action.type) {
            case 'ADD_TO_TEAM':
                return {...state, team: [...state.team, action.payload]}
            case 'REMOVE_FROM_TEAM':
                return {...state, team: state.team.filter((p) => p !== action.payload)}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{state, dispatch}} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider}
export default GlobalContext
