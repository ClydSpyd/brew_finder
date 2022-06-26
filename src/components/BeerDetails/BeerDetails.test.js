import React from 'react';
import { render } from '@testing-library/react';
import BeerDetails from './BeerDetails';

describe('render BeerDetails data', () => {{
    
    const propsObject = {
        name:"testName",
        image_url:"https://images.punkapi.com/v2/5.png",
        abv:1,
        ibu:2,
        ph:3
    }

    it('displays beer name', () => {
        const { getByTestId } = render(<BeerDetails data={propsObject} />)
        const title = getByTestId('beerName');
        expect(title.innerHTML).toBe(propsObject.name);
    })

    it('renders beer image if image_url present', () => {
        const { getByTestId } = render(<BeerDetails data={propsObject} />)
        const img = getByTestId('beerImg');
        expect(img).toBeTruthy();
    })

    it('renders placeholder if no image_url present', () => {
        const { getByTestId } = render(<BeerDetails data={{image_url:null}} />)
        const placeholder = getByTestId('imgPlaceholder');
        expect(placeholder).toBeTruthy();
    })

    it('renders stat divs', () => {
        const { getAllByTestId } = render(<BeerDetails data={{image_url:null}} />)
        const stats = getAllByTestId('statDiv');
        expect(stats).toHaveLength(3);
    })

}})