import React, { useEffect, useRef, useState } from 'react';
import { months, years } from '../../utilities/dateStrings';
import DropdownMenu from '../../utilities/DropdownMenu/DropdownMenu';
import './Inputs.scss'
const regex = /^[a-zA-Z0-9- ]*$/

const Inputs = ({ getData, API, searchRef }) => {

    const [ params, setParams ] = useState({type:API.getTextSearch, input:''})
    const [ error, setError ] = useState(false)

    useEffect(()=>{
        if(params.type===API.getBrewedBefore){
            searchRef.current.value="";
        }
    },[params.type])
    
    const handleSearch = () => {
        if(!regex.test(params.input)) return setError(true)
        getData(params.type, 'list', params.input);
        setParams({type:API.getTextSearch, input:""})
    }
    
    const handleDateSelect = (value, isMonth) => {
        
        const newValue = 
            params.type === API.getTextSearch ? value : 
            (!isMonth && params.input == "") ? value : 
            (!isMonth && params.input.length===4) ? value : 
            (isMonth && params.input.length === 4) ? `${value}-${params.input}` :
            isMonth ? `${value}-${params.input.substring(3)}` :  `${params.input.substring(0,2)}-${value}`

        setParams({type:API.getBrewedBefore, input:newValue})
    }

    const returnBtnClass = () =>  params.input==="" || params.type === API.getBrewedBefore && params.input?.length < 7 ? 'btn inactive' : 'btn'

    return   <div className="bottomRow">
                <p>Search brews by:</p>
                <div className="inputs">
                    <div className="input">
                        <p>Brew name</p>
                        <input
                            ref={searchRef}
                            data-testid={"inputElement"}
                            onChange={()=>setError(false)}
                            onFocus={()=>setParams({type:API.getTextSearch, input:''})}
                            onKeyDown={e=>{if(e.key==="Enter"&&params.input!=='')handleSearch()}}
                            onKeyUp={e=>setParams({type:API.getTextSearch, input:e.target.value})} 
                            type="text" />
                            <p className={`errorText ${error && 'show'}`}>Letters, numbers, hyphens and spaces only</p>
                    </div>
                    <p>or</p>
                    <div className="input">
                        <p>Brewed before</p>
                        <div className="dateSelectors">
                            <DropdownMenu
                                reset={params.type!==API.getBrewedBefore}
                                callback={handleDateSelect}
                                type={"Month"}
                                items={months} />
                            <DropdownMenu
                                reset={params.type!==API.getBrewedBefore}
                                callback={handleDateSelect}
                                type={"Year"}
                                items={years} />
                        </div>
                    </div>
                </div>
                <div
                    data-testid={"inputSearchBtn"}
                    onClick={handleSearch}
                    className={returnBtnClass()}>Let's go!</div>
            </div>
}

export default Inputs;