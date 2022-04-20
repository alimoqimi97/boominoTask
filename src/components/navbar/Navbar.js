import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='actions-bar'>
                <a className='search-action actions-border action-sizes action-center' href="/search">
                    <img className='icon ' src='./search.svg' alt='search' />
                </a>
                <a className='back-action actions-border action-sizes action-center' href="/">
                    <img className='icon' src='./back.svg' alt='back' />
                </a>
            </div>
            <a href="/profile">
                <img className='avatar' src='./avatar.png' alt='avatar' />
            </a>
        </nav>
    );
}

export default Navbar;