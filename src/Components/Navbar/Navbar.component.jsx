import './Navbar.scss'

import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__brand">
                <h1>Spotify Clone</h1>
            </div>
            <div className="navbar__nav">
                <p className="navbar__nav-link">New Playlist</p>
                <input type="text" placeholder='Song Search...'  className="navbar__nav-search" />
            </div>
        </div>
    )
}

export default Navbar
