import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) =>{
      const adminMail={
        name:data.name,
        email:data.email
      }
      const url=`https://peaceful-fortress-84705.herokuapp.com/addAdmin`
      fetch(url,{
        method:'POST',
        headers:{'content-Type': 'application/json'},
        body:JSON.stringify(adminMail)
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
                                    <li><FontAwesomeIcon icon={faPlus} /><Link to="/admin">Add Service</Link></li>
                                    <li><FontAwesomeIcon icon={faPlus} /><Link to="/admin">Order List</Link></li>
                                    <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/makeAdmin">Make Admin</Link></li>
                                    <li><FontAwesomeIcon icon={faPlus} /><Link to="/manageService">Manage Service</Link></li>
                                  </ul>
                          </div>
                      </div>
                      <div className="col-lg-8 offset-lg-1">
                          <div className="formArea">
                              <h1>Make Admin</h1>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                  <input  placeholder="Enter Name" type="text" className="form-control input_p" {...register("name")} required/>
                                  <br/>
                                  <input  placeholder="Enter Email address" type="text" className="form-control input_p" {...register("email")} required/>
                                  <br/>
                                  <input className="btn btn_primary" type="submit" value="Submit" />
                              </form>
                          </div>
                      </div>
                  </div>            
              </div>
          </div>
      );
};

export default MakeAdmin;