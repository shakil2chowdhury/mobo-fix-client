import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar></Navbar>
            <div class="p-5 text-center bg-image header-main">
                <div class="mask header-mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white">
                            <h1 class="mb-3">Reliable Smartphone Repair Service</h1>
                            <h4 class="mb-3">Subheading</h4>
                            <a class="btn btn-outline-light btn-lg" href="#!" role="button"
                            >Call to action</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;