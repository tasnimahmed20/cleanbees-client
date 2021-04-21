import React from 'react';
import Footer from '../../Home/Footer/Footer.js';
import OurServices from '../OurServices/OurServices.js';
import ServiceBanner from '../ServiceBanner/ServiceBanner.js';
import Header from './../../../components/Header/Header.js'

const Service = () => {
    return (
        <>
         <ServiceBanner/>
         <OurServices/>
         <Footer/>  
        </>
    );
};

export default Service;