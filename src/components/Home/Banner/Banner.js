import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="banner-text text-center">
                            <h1>Give Your Home Some Shine</h1>
                            <p>Reliable house cleaning professionals serving the greater San Francisco area</p>
                            <Link to="/service">Get Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;