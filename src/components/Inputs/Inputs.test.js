import React from 'react';
import { render } from '@testing-library/react';
import Inputs from './Inputs';
import DropdownMenu from '../../utilities/DropdownMenu/DropdownMenu';
import { years } from '../../utilities/dateStrings';
const searchRef = React.createRef()

const inputProps = {
    API: {},
    searchRef
}

const dropdownProps = {
    type:"Year",
    items:years
}

describe('renders Input component correctly', () => {

    it('renders the correct number of inputs', ()=> {
        const { getAllByTestId } = render(<Inputs {...inputProps} />)
        const elements = getAllByTestId('inputElement');
        expect(elements).toHaveLength(3);
    })
    
    it('Renders search btn initially as inactive', ()=> {
        const { getByTestId } = render(<Inputs {...inputProps} />)
        const inputSearchBtn = getByTestId('inputSearchBtn');
        expect(inputSearchBtn.classList.contains('inactive')).toBeTruthy()
    })
    
    it('renders the correct props on the dropdown elements', () => {
        const { getByTestId, getAllByTestId } = render(<DropdownMenu {...dropdownProps} />)
        const initialText = getByTestId('dropText')
        const menuItems = getAllByTestId('menuItem')
        expect(initialText.innerHTML).toBe(dropdownProps.type);
        expect(menuItems).toHaveLength(16)
    })
})