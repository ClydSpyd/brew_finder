import React from 'react';
import logo_BD from '../assets/logo_brewdog.png'

const Header = () => {
    return  <div className="headerContainer">
                <img className='logo' src={logo_BD} />
                <h1>BREW FINDER</h1>
            </div>
}

export default Header;