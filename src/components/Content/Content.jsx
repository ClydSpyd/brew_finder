import React from 'react';
import BeerDetails from '../BeerDetails/BeerDetails';
import loader from '../../assets/loader2.svg'
import ResultsList from '../ResultsList/ResultsList';
import './Content.scss'


const Content = ({ appState:{ data, isLoading, view }, dispatch }) => {

    return  <div className="contentContainer">
                {
                    isLoading ?
                        <div className="loaderDiv">
                            <img src={loader} />
                            <p>Fetching brew data...</p>
                        </div>

                    :data.error ?
                        <div data-testid={"messageDiv"} className="messageDiv">
                            <>
                                <p className='errorText'>{data.error}</p>
                            </>
                        </div>

                    :data.empty ?
                        <div data-testid={"messageDiv"} className="messageDiv">
                            <h5>No results found!</h5>
                        </div>

                    :view === "details" ?
                        <BeerDetails data={data} isLoading={isLoading} />

                    :view === "list" &&
                        <ResultsList data={data} dispatch={dispatch} />

                }
            </div>
}

export default Content;