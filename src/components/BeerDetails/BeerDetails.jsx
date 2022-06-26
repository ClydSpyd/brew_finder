import React from 'react';
import logo from '../../assets/logo_brewdog2.png'
import './BeerDetails.scss'

const BeerDetails = ({ data }) => {


    return  <div className="BeerDetailsContainer">
                <h2>{data.name}</h2>
                    {
                        data.image_url ?
                            <div className="imgContainer">
                                <img className='beerImg' src={data.image_url} alt={`${data.name}_image`} /> 
                            </div> 
                        :
                            <>
                                <img className='logo' src={logo} alt="" />
                                <p className='block'>no image available</p>
                            </>

                    }
                <p className='tagline'>{data.tagline}</p>
                <p className='description'>{data.description}</p>
                <h5>First brewed: {data.first_brewed}</h5>
                <div className="stats">
                    <div className="stat">
                        <h6>ABV</h6>
                        <h5>{data.abv}%</h5>
                    </div>
                    <div className="stat">
                        <h6>IBU</h6>
                        <h5>{data.ibu}</h5>
                    </div>
                    <div className="stat">
                        <h6>PH</h6>
                        <h5>{data.ph}</h5>
                    </div>
                </div>
            </div>
}

export default BeerDetails;