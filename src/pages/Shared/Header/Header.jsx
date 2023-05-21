import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mb-5'>
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p className='mt-3 text-secondary fs-5 text-black-50'>Journalism Without Fear or Favor</p>
                <p className='fs-4 text-black-50'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='mb-3 d-flex bg-secondary p-3'>
                <p className='bg-danger text-white fs-4 py-2 px-4 m-0'>Latest</p>
                <Marquee speed={40} className='fs-4 text-white'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            {/* Navbar */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='fs-5 fw-bold'>Home</Nav.Link>
                            <Nav.Link href="#about" className='fs-5 fw-bold'>About</Nav.Link>
                            <Nav.Link href="#career" className='fs-5 fw-bold'>Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link href="#profile">
                                <img className='w-25' src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Profile Image" />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href='#login'>
                                <Button variant="light" className='fs-5 fw-bold'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;