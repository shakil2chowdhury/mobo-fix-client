import React from 'react';
import logo from '../../../logo.png'
import './Navbar.css'

const Navbar = () => {
    const handleLogout = () => {
        sessionStorage.clear();
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Container wrapper */}
            <div className="container">
                {/* Toggle button */}
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarRightAlignExample" aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>
                {/* Collapsible wrapper */}
                <div className="collapse navbar-collapse" id="navbarRightAlignExample">
                    {/* Left links */}
                    <img src={logo} className="nav-logo"/>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin">Admin</a>
                        </li>
                        <li className="nav-item ms-2">
                            {sessionStorage.getItem('email') ? <button className="btn btn-secondary" onClick={handleLogout}>Logout</button> : <a className="btn btn-secondary" href="/login">Login</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;