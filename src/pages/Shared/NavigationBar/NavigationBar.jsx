import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    // for logOut
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error=>console.log(error));
    }

    return (
        <Container className='mb-4'>
            {/* Navbar */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><Link to='/' className='fs-5 fw-bold'>Home</Link></Nav.Link>

                            <Nav.Link className='fs-5 fw-bold'>
                                <Link to='/about'>About</Link>
                            </Nav.Link>

                            <Nav.Link className='fs-5 fw-bold'>
                                <Link to='/career'>Career</Link>
                            </Nav.Link>
                        </Nav>

                        <Nav className='d-flex align-items-center'>
                            {user && <Nav.Link>
                                <FaUserCircle className='fs-4 fw-bold m-0' />
                            </Nav.Link>}
                            {user && <Nav.Link eventKey={2} >
                                <p className='fs-5 fw-bold m-0'>{user.displayName}</p>
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href='#login'>
                                {user ?
                                    <Button onClick={handleLogOut} variant="light" className='fs-5 fw-bold'>Logout</Button> :
                                    <Link to='/login' ><Button variant="light" className='fs-5 fw-bold'>Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;