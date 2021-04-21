import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css'

const OurServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://peaceful-fortress-84705.herokuapp.com/getService')
        .then(response=>response.json())
        .then(data=>setServices(data))
      },[])
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="mb-5 pb-3">Our Services</h1>
                    </div>
                </div>
                <div className="row">
                    
                        {
                            services.map(service=>
                                <div className="col-lg-4" key={service._id}>
                                    <div className="serviceContent">
                                        <img src={service.image} alt="Clean Bees"/>
                                        <h4>{service.name}</h4>
                                        <p>${service.price}</p>
                                        <p>{service.hour} Hours</p>
                                        <Link to={`/bookService/${service._id}`} className="btn btn-primary">Buy Now</Link>
                                    </div>
                                </div>
                                )
                        }
                </div>
            </div>
        </section>
    );
};

export default OurServices;