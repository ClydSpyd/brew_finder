import React, { useEffect, useRef, useState } from 'react'
import chevron from '../../assets/chevron.png'
import './DropdownMenu.scss'

const DropdownMenu = ({ reset, type, items, callback, initial }) => {

    const [ selected, setSelected ] = useState(null)
    const [ open, toggleOpen ] = useState(false)
    const dropRef = useRef(null)

    useEffect(()=>{
        if(reset)setSelected(null)
    },[reset])

    const handleSelection = (input) => {
        callback(input.val, type==="Month")
        setSelected(input.str)
        toggleOpen(false)
    }

    return  <div data-testid={"inputElement"} onClick={()=>{if(!open)toggleOpen(true)}} className="dropdown">
                <img src={chevron} alt="chevron" />
                <h6 data-testid={"dropText"} className='dropText'>{selected ? selected : type}</h6>
                <div onMouseLeave={()=>toggleOpen(false)} className={`items ${open && "open"}`}>
                    {
                        items.map((item, index) => 
                            <div data-testid={"menuItem"} onClick={()=>handleSelection(item)} key={`item_${index}`} className="menuItem">{item.str}</div>
                        )
                    }
                </div>
            </div>
}

export default DropdownMenu