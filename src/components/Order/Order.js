import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Order = () => {
    const [orderInfo,setOrderInfo]=useState([])
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch('https://peaceful-fortress-84705.herokuapp.com/orderService?email='+loggedInUser.email)
        .then(response=>response.json())
        .then(data=>setOrderInfo(data))
    })
    return (
        <section className="checkoutArea">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 links">
                        <div className="adminLinks">
                            <h4><FontAwesomeIcon icon={faThLarge} />DashBoard</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/admin">Book Service</Link></li>
                                    <li><FontAwesomeIcon icon={faPlus} /><Link to="/order">Booking List</Link></li>
                                    <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/addReview">Review</Link></li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                                {
                                    orderInfo.length>0?<div className="col-lg-12">
                                    <h1 className="mt-5 pt-3">Your Order: </h1>
                                    <table className="table tableShadow">
                                    <thead>
                                                <tr>
                                                    <th scope="col">Service Name</th>
                                                    <th scope="col">Service Hour</th>
                                                    <th scope="col">Service Price</th>
                                                    <th scope="col">Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orderInfo.map(service => 
                                                        <tr key={service._id}>
                                                            <td>
                                                                {service.name}
                                                            </td>
                                                            <td>
                                                                {service.time} Hours
                                                            </td>
                                                            <td>
                                                                $ {service.price}
                                                            </td>
                                                            <td>
                                                                <div class="btn-group">
                                                                    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Pending
                                                                    </button>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                    </table>
                                    <div className="text-right">
                                    </div>
                                </div>:
                                <div className="col-lg-12">
                                    <h1>Sorry! You don't have any Order Now</h1>                    
                                </div>                    
                            }
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Order;