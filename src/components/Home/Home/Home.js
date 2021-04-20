import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default Home;