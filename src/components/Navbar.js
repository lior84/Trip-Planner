import React, {useState} from 'react'
import logo from '../images/img-1.jpg'

function Navbar() {
    return (
        <>
            <nav className="Navbar">    
                <div className="navbar-container">
                    <img src={logo} alt="Logo" />
                    <p>Nsfsaaviii</p>
                </div>
            </nav>
       </>
    )
}

export default Navbar
