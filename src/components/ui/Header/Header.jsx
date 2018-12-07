import React from 'react';
import './style.scss';

const Header = () => {
    return (
    <header >
        <nav className="container" >
        <div className="logo">
        <a href="#" className="navLinks dropdown">Logo</a>
            </div>
            <div className="item">
                <a href="#" className="navLinks">Home</a>
            </div>
            <div className="item">
                <a href="#" className="navLinks">About Me</a>
            </div>
            <div className="item">
                <a href="#" className="navLinks">Portfolio</a>
            </div>
            <div className="item">
                <a href="#" className="navLinks">Contact Me</a>
            </div>
            <div className="item">
              
            </div>
        </nav>
    </header>
    )
}

export default Header