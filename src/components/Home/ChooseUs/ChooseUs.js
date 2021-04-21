import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <section className="chooseUs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">    
                         <h1> Why Choose Us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                       <div className="choose-text">
                        <h3>Certified Professional Cleaners</h3>
                       </div>
                    </div>
                    <div className="col-lg-3">
                       <div className="choose-text">
                        <h3>Environmentally Friendly Cleaning</h3>
                       </div>
                    </div>
                    <div className="col-lg-3">
                       <div className="choose-text">
                        <h3>100% Satisfaction Guaranteed</h3>
                       </div>
                    </div>
                    <div className="col-lg-3">
                       <div className="choose-text">
                        <h3>Available Evenings & Weekends</h3>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;