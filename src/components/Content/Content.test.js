import React from 'react';
import { render } from '@testing-library/react';
import Content from './Content';

const dummyData = [
    {
        name:"hello",
        description:"world"
    }
]

describe('render Content elements', () => {
 
    it('renders error message when receiving error response', () => {
        const { getByTestId } = render(<Content appState={{data:{error:"something went wrong"}}} />)
        const errorMsg = getByTestId('messageDiv');
        expect(errorMsg).toBeTruthy()
    })

    it('renders empty message when receiving empty response', () => {
        const { getByTestId } = render(<Content appState={{data:{empty:true}}} />)
        const emptyMsg = getByTestId('messageDiv');
        expect(emptyMsg).toBeTruthy()
    })

    it('renders Details component based on view prop', () => {
        let { getByTestId } = render(<Content appState={{data:{},view:"details"}} />)
        const beerDetails = getByTestId('beerDetails');
        expect(beerDetails).toBeTruthy()
        
    })
    it('renders List component based on view prop', () => {
        let { getByTestId } = render(<Content appState={{data:dummyData,view:"list"}} />)
        const resultsList = getByTestId('resultsList');
        expect(resultsList).toBeTruthy()
    })

})