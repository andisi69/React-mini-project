import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-1">
        <div className="container ">
            <Link to="/" className='navbar-brand text-white'>Filma</Link>
                <button className="navbar-toggler" style={{background: 'white', padding: '1px 3px'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{fontSize: '18px'}}></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-between" style={{ marginLeft: 'auto' }}>
                    <li className="nav-item">
                        <Link to="/" className='nav-link text-white'>Home</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/movies" className='nav-link text-white'>Movies</Link>
                    </li>
                </ul>
            </div>
        </div>
   </nav>
  )
}

export default Header