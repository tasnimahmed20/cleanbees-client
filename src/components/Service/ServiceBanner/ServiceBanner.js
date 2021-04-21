import React from 'react';
import './ServiceBanner.css'

const ServiceBanner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-text">
                            <h2>Our Services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nemo maxime laboriosam asperiores nobis animi fugiat exercitationem hic neque consequuntur.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="service-text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis possimus enim commodi dignissimos mollitia numquam quia asperiores nisi aut fugit? Dolore neque commodi, at ab maiores et odit? Rem cumque ducimus deleniti sequi, voluptatum veniam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;