import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const BookService = () => {

    const {serviceId}=useParams();

    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [singleService,setSingleService]=useState([])

    useEffect(()=>{
        serviceId&&fetch(`https://peaceful-fortress-84705.herokuapp.com/oneService/${serviceId}`)
       .then(response=>response.json())
       .then(data=>setSingleService(data))
   },[])

    const handleOrder=()=>{
        const date=new Date()
        const orderDate=date.toLocaleString()
        const orderInfo={...loggedInUser,...singleService[0],orderDate}
        delete orderInfo._id;
        fetch('https://peaceful-fortress-84705.herokuapp.com/newOrder',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(orderInfo)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))      

        alert("Your Order Placed Successfully");
    }
    return (
        <div className="adminContent">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 links">
                    <div className="adminLinks">
                        <h4><FontAwesomeIcon icon={faThLarge} />DashBoard</h4>
                            <ul>
                                <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/bookService">Book Service</Link></li>
                                <li><FontAwesomeIcon icon={faPlus} /><Link to="/order">Booking List</Link></li>
                                <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/addReview">Review</Link></li>
                            </ul>
                    </div>
                </div>
                <div className="col-lg-8 offset-lg-1">
                    {singleService.length ? <div className="formArea">
                        <form>
                            <input  value={loggedInUser.name} className="form-control input_p" readOnly/>
                            <input  value={loggedInUser.email} className="form-control input_p my-4"readOnly/>
                            <input  value={singleService[0].name} className="input_p form-control my-4" readOnly/>
                            <input  value={singleService[0].price} className="input_p form-control my-4"readOnly/>
                            <br/>
                            <input onClick={handleOrder} className="btn btn_primary" type="submit" value="Order" />
                        </form>
                    </div>:
                        <div className="mt-5 pt-5 text-center">
                            <h2>Please Select at least One Service</h2>
                            <Link to="/" className="btn btn_primary d-inline-block">Back Home</Link>
                        </div>
                    }
                </div>
            </div>            
        </div>
    </div>
    );
};

export default BookService;