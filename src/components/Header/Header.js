import React , { useContext }from 'react';
import {Navbar, Nav,} from 'react-bootstrap';
import { UserContext } from '../../App';
import './Header.css';
import logo from './../../images/logo.png';

const Header = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    
    return (
        <div className="header">
          <Navbar expand="lg" className="container">
            <Navbar.Brand href="/" className="logo"><img src={logo} alt="clean Bees"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbarNav">
                 <Nav.Link href="/home" className="navItem">Home</Nav.Link>
                 <Nav.Link href="/about" className="navItem">About Us</Nav.Link>
                 <Nav.Link href="/service" className="navItem">Services</Nav.Link>
                 <Nav.Link href="#contact" className="navItem">Contact</Nav.Link>
                 <Nav.Link href="/admin" className="navItem">Dashboard</Nav.Link>
                 {
                     loggedInUser.name ? <img className="img-fluid userPhoto" src={loggedInUser.photo} alt={loggedInUser.name}/>
                     :
                     <Nav.Link href="/Login" className="navItem loginBtn">Login</Nav.Link>
                 }
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;