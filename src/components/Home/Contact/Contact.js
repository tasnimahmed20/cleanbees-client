import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact"  id="contact">
            <div className="container">
                <div className="row">
                    <div className="contactTitle col-lg-12 text-center">
                        <h3>Contact Us</h3>
                        <h1>Always Connect with us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form action="" className="form">
                            <div class="mb-3">
                                <input type="email" class="form-control"  placeholder="Email Address*" required />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control"  placeholder="Subject*" required/>
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" placeholder="Your Message*" required></textarea>
                            </div>
                            <div class="mt-4 text-center">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default Contact;