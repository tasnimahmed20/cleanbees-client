import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-text">
                            <h1>Our Company</h1>
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-2">
                        <div className="footer-links">
                            <h3>Head Office</h3>
                            <p>500 Terry Francois Street San Francisco, CA 94158</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="office-time">
                            <h2>Operating Hours</h2>
                            <p>Mon - Fri: 8am - 8pm</p>
                            <p>Mon - Fri: 8am - 8pm</p>
                            <p>Mon - Fri: 8am - 8pm</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h5>©2021 by Clean Bees</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;