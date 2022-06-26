import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as API from '../../services/api.service';
import Controls from './Controls';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

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
    })
    
    // configure({ adapter: new Adapter() })
    // it('calls correct endpoint', () => {
    //     const wrapper = render(<Controls />)
    //     const buttons  = wrapper.getAllByTestId('randomBtn')
    //     const wrapperShallow = shallow(<Controls />);

    //     // const buttons = getAllByTestId('randomBtn');
    //     // const getData = () => jest.fn()
    //     const getData = jest.spyOn(wrapperShallow.instance(), 'getData')
    //     fireEvent.click(buttons[0])
    //     expect(getData()).toHaveBeenCalled()
    // })
})