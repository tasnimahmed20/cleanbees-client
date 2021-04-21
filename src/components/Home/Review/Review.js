import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Review.css'

const Review = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://peaceful-fortress-84705.herokuapp.com/getReview')
        .then(response=>response.json())
        .then(data=>setReviews(data))
      },[])
    return (
       <section className="review">
           <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ReviewText text-center">
                            <h1>What Client Say</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                        {
                            reviews.map(review=>
                                <div className="col-lg-4" key={review._id}>
                                    <div className="reviewCard">
                                        <div className="reviewInfo d-flex align-items-center">
                                                <div className="reviewImg">
                                                    <img src={review.photo} alt="doctors portal" className="img-fluid"/>
                                                </div>
                                                <div className="reviewName">
                                                    <h5>{review.name}</h5>
                                                    <h6>{review.company}</h6>
                                                </div>
                                        </div>
                                        <p>{review.message}</p>                
                                    </div>
                                </div>)
                        }
                </div>
            </div>      
       </section>
    );
};

export default Review;