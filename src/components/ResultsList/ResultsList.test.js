import React from 'react';
import { render } from '@testing-library/react';
import ResultsList from './ResultsList';

const dummyData = [
    {name:"hello",description:"world"},
    {name:"hello",description:"world"},
    {name:"world",description:"hello"},
    {name:"hello",description:"world"},
    {name:"hello",description:"world"},
    {name:"hello",description:"world"},
    {name:"hello",description:"world"},
    {name:"hello",description:"world"},
    {name:"hello",description:"world"},
    {name:"hello",description:"world"},
]
describe('render Results elements correctly', () => {
 
    it('renders correct number of results', () => {
        const { getAllByTestId } = render(<ResultsList data={dummyData} />)
        const items = getAllByTestId('listItem');
        expect(items).toHaveLength(10);
    })
 
    it('renders correct brew name', () => {
        const { getAllByTestId } = render(<ResultsList data={dummyData} />)
        const itemNames = getAllByTestId('itemName');
        expect(itemNames[0].innerHTML).toBe("hello");
        expect(itemNames[2].innerHTML).toBe("world");
    })
})