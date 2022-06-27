import React from 'react'
import logo from '../../assets/logo_brewdog2.png'
import './ResultsList.scss'

const ResultsList = ({ data, dispatch }) => {

    const handleSelection = payload => {
        dispatch({type: 'select_list_item', payload})
    }
    return  <div data-testid={"resultsList"} className="resultsListContainer">
                {
                    data.map((item, index ) => {
                        return  <div data-testid={"listItem"} onClick={()=>handleSelection(item)} key={`item_${index}`} className="listItem">
                                    {
                                        item.image_url ?
                                            <div className="imgContainer">
                                                <img className='beerImg' src={item.image_url} alt={`${item.name}_image`} /> 
                                            </div> 
                                        :
                                            <div className="imgContainer">
                                                <img className='logo' src={logo} alt="" />
                                                <p className='block'>no image available</p>
                                            </div>

                                    }
                                    <div className="text">
                                        <h3 data-testid={"itemName"}>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                    })
                }
            </div>
}

export default ResultsList