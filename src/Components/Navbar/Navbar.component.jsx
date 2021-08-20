import './Navbar.scss'

import React from 'react'
import { GoSearch } from "react-icons/go"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [search, setSearch] = React.useState("")
    return (
        <div className='navbar'>
            <a href="/" className="navbar__brand">
                <h1>Spotify Clone</h1>
            </a>
            <div className="navbar__nav">
                <input value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder='Song Search...'  className="navbar__nav-search" />
                <Link to={`/search?search=${search}`}><GoSearch className="search"/></Link>
                
            </div>
        </div>
    )
}

export default Navbar
