import React from 'react'
import '../../css/Style.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../../media/logo.png';


function Header () {
    return (
    <Navbar  expand="lg" sticky="top" id="navbar" className='py-3'>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            
            <button 
            class="navbar-toggler d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <p class="fw-bold offcanvas-title" id="offcanvasNavbarLabel">
                BCR
              </p>
              <button
                type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
              </button>
            </div>


            <Offcanvas.Body id="navbar">
            <ul class="navbar-nav ms-auto mr-5">
              <li class="nav-item">
                <a class="nav-link" href="#services">Our Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#why-us">Why Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonial">Testimonials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq">FAQ</a>
              </li>
            </ul>
            </Offcanvas.Body>
            </div>
            
        </Container>
    </Navbar>
    
  )
}

export default Header