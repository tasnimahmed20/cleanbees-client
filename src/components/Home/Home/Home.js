import React from 'react';
import OurServices from '../../Service/OurServices/OurServices';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Number from '../Number/Number';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    
    return (
        <>
        <Banner/>
        <Number/>
        <ChooseUs/>
        <OurServices/>
        <Review/>
        <Contact/>
        <Footer/>
        </>
    );
};

export default Home;