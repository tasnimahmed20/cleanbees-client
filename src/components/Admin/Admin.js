import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './Admin.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import BookService from '../BookService/BookService';

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL,setImageURL]=useState(null)
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
      fetch('https://peaceful-fortress-84705.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({email: loggedInUser.email})
      })
      .then(response => response.json())
      .then(data => setIsAdmin(data))
  }, []);

  
  const onSubmit = data =>{
    const serviceData={
      name:data.name,
      price:data.price,
      hour:data.hour,
      image:imageURL
    }
    const url=`https://peaceful-fortress-84705.herokuapp.com/addService`
    fetch(url,{
      method:'POST',
      headers:{'content-Type': 'application/json'},
      body:JSON.stringify(serviceData)
    })
    .then(response =>response.json())
    .then(data=>console.log(data))
  };


  const handleImageUpload=(event)=>{
    const imgData=new FormData();
      imgData.set('key','78a8accb253aa4dd7493f669bee78df3');
      imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then( response=> {
          setImageURL(response.data.data.display_url);
        })
        .catch((error) =>{
          console.log(error);
        });
    }
    return (
        <div className="adminContent">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 links">
                        <div className="adminLinks">
                            <h4><FontAwesomeIcon icon={faThLarge} />DashBoard</h4>
                                <ul>
                                  { isAdmin ? <div>
                                        <li><FontAwesomeIcon icon={faPlus} /><Link to="/admin">Add Service</Link></li> 
                                        <li><FontAwesomeIcon icon={faPlus} /><Link to="/allOrder">Order List</Link></li>                                       
                                        <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/makeAdmin">Make Admin</Link></li>
                                        <li><FontAwesomeIcon icon={faPlus} /><Link to="/manageService">Manage Service</Link></li>
                                  </div> :
                                    <div>
                                        <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/bookService">Book Service</Link></li>
                                        <li><FontAwesomeIcon icon={faPlus} /><Link to="/order">Booking List</Link></li>
                                        <li><FontAwesomeIcon icon={faPencilAlt} /><Link to="/addReview">Review</Link></li>
                                    </div>
                                    
                                  
                                  }
                                    
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                        {isAdmin ? 
                          <div className="formArea">
                            <h1>Add Service</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input  placeholder="Enter Service Name" type="text" className="form-control input_p" {...register("name")} required/>
                                <input  placeholder="Enter service hour" type="text" className="form-control input_p my-4" {...register("hour")} required/>
                                <input  placeholder="Enter price" type="number" className="input_p form-control my-4" {...register("price")} required/>
                                <input className="my-2" type="file" onChange={handleImageUpload} required/>
                                <br/>
                                <br/>
                                <input className="btn btn_primary" type="submit" value="Save" />
                                <input className="btn btn_primary btn_danger" type="reset" value="Reset" />
                            </form>
                          </div>:
                            <h2 className="mt-5 pt-3">Welcome {loggedInUser.name}</h2>                        
                        }
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Admin;