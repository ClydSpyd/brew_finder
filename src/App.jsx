import React, { useReducer, useEffect } from 'react'
import  * as API  from './services/api.service'
import './styles/main.scss'
import Header from './components/Header'
import Content from './components/Content/Content'
import { reducer } from './config/reducer'
import { initialState } from './config/initialState'
import Controls from './components/Controls/Controls'

const App = () =>{


    const [ appState, dispatch ] = useReducer(reducer, initialState)

    const initialFetch = async () => {
        const randomBeer = await API.getRandomBeer()
        dispatch({type:'set_data', payload:randomBeer})
    }

    useEffect(()=>{
        if(!appState.data)initialFetch()

    },[])
    
    return(
        <>
            <Header />
            <div className="main">
                <Controls dispatch={dispatch} />
                <Content appState={appState} dispatch={dispatch} />
            </div>
        </>
    )
    
}

export default App;
