import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThLarge,faPlus,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageService = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://peaceful-fortress-84705.herokuapp.com/getService')
        .then(response=>response.json())
        .then(data=>setServices(data))
      },[])

      const handleDeleteProduct =(id)=>{
        axios.delete('https://peaceful-fortress-84705.herokuapp.com/delete/'+id)
        .then(response=>{
            console.log(response)
        })
        window.location.reload(true);
      }

    return (
        <div className="adminContent">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 links">
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
                    <div className="col-lg-8">
                        <div className="productEditArea mt-5">
                            <h1>Edit Product</h1>
                            <table className="table">
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
                                        services.map(service => 
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
                                                    <button onClick={()=>handleDeleteProduct(service._id)} className="btn btn-primary" style={{background: "#3f51b5",padding:'4px 24px'}}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default ManageService;