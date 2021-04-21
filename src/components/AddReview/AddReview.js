import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';
import './AddReview.css'
import { UserContext } from '../../App';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    
    const onSubmit = (data) =>{
      const reviewData={
        name:data.name,
        company:data.company,
        message:data.message,
        photo:loggedInUser.photo
      }
      const url=`https://peaceful-fortress-84705.herokuapp.com/addReview`
      fetch(url,{
        method:'POST',
        headers:{'content-Type': 'application/json'},
        body:JSON.stringify(reviewData)
      })
      .then(response =>response.json())
      .then(data=>console.log(data))
    };
  

      
  
      return (
          <div className="adminContent">
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
                          <div className="formArea">
                              <h1>Give Review</h1>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                  <input  placeholder="Enter Your Name" type="text" className="form-control input_p" {...register("name")} required/>
                                  <input  placeholder="Enter Your Company Name" type="text" className="form-control input_p my-4" {...register("company")} required/>
                                  <input  placeholder="Enter Your Review" type="text" className="input_p form-control my-4" {...register("message")} required/>
                                  <br/>
                                  <input className="btn btn_primary" type="submit" value="Save" />
                              </form>
                          </div>
                      </div>
                  </div>            
              </div>
          </div>
      );
};

export default AddReview;