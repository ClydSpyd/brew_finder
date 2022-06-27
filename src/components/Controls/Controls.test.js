import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Controls from './Controls';

describe('render Control elements', () => {
 
    it('renders random brew buttons', () => {
        const { getAllByTestId } = render(<Controls />)
        const buttons = getAllByTestId('randomBtn');
        expect(buttons).toHaveLength(2);
    })
 
    it('toggles open CSS class upon clicking magnifying glass', () => {
        const { getByTestId } = render(<Controls />)
        const container = getByTestId('controlsDiv');
        const btn = getByTestId('searchBtn');
        
        expect(container.classList.contains('open')).toBeFalsy()
        fireEvent.click(btn)
        expect(container.classList.contains('open')).toBeTruthy()
        fireEvent.click(btn)
        expect(!container.classList.contains('open')).toBeTruthy()
    })
    
})