import React, { useContext, useEffect } from 'react'

// importing bootstrap essentials
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

// importing context work
import { logincontext } from '../../context/context' 

//importing compoenets
import CartOffCanvas from './CartOffCanvas';



export default function Navigationbar() {
    const {state,dispatch} = useContext(logincontext)




    return (
        <>
            <Navbar expand="lg" >
                <Container className="rounded-pill border border-secondary">
                    <Navbar.Brand href="#home" >
                        <img
                            alt=""
                            src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/331348631/original/1e2fb0b45ccd82d66ba913019cf80fc3c0035648.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top rounded-circle"
                        />{' '}
                        BakeHype
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/products">Products</Link>
                            <Link className='nav-link' to="/categories">Category</Link>
                            <Link className='nav-link' to="/brands">Brands</Link>
                            {/* <Link className='nav-link' to="/profile">Profile</Link> */}
                            <Link className='nav-link' to="/cart">Checkout</Link>
                            <CartOffCanvas/>
                            <Link className='nav-link' to="/"><button className='btn btn-outline-dark ' onClick={() => {
                                dispatch({
                                    type: "LOGOUT",
                                })
                                

                            }}>SignOut</button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}




