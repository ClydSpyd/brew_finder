import React, { useEffect, useRef, useState } from 'react';
import * as API from '../../services/api.service';
import lupa from '../../assets/lupa.png'
import Inputs from '../Inputs/Inputs';
import './Controls.scss'

const Controls = ({ dispatch }) => {

    const [ open, toggleOpen ] = useState(false)
    const contRef = useRef(null)
    const searchRef = useRef(null)

    useEffect(()=>{
        if(open)setTimeout(()=>{ searchRef.current.focus() },300)
        
    },[open])

    const getData = async (fetchFunction, view, input) => {
        toggleOpen(false)
        dispatch({type:"toggle_loading", payload:true})
        let data = await fetchFunction(input);
        dispatch({type:"set_view", payload:view})
        dispatch({type:"set_data", payload:data})
        searchRef.current.value=""
    }

    return  <div data-testid={"controlsDiv"} ref={contRef} className={`controlsContainer ${open && "open"}`}>
                <div className="topRow">
                    <div className="buttons">
                        <div data-testid={"randomBtn"} onClick={()=>getData(API.getRandomBeer, 'details')} className="btn">RANDOM BREW</div>
                        <div data-testid={"randomBtn"} onClick={()=>getData(API.getRandomNonAlcoholic, 'details')} className="btn">RANDOM AF</div>
                    </div>
                    <div data-testid={"searchBtn"} onClick={()=>toggleOpen(!open)} className="searchBtn">
                        <img src={lupa} alt="magnfying glass" />
                    </div>
                </div>
                <Inputs getData={getData} API={API} searchRef={searchRef} />
            </div>
}

export default Controls;