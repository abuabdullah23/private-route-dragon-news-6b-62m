import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
import bg1 from '../../../assets/bg1.png';

const RightNav = () => {
    return (
        <div>
            <div>
                <h3 className='mb-3'>Login With</h3>
                <Button className='w-100 mb-2' variant="outline-info"> <FaGoogle /> Login with Google</Button>
                <Button className='w-100' variant="outline-dark"> <FaGithub /> Login with Github</Button>
            </div>
            <div>
                <h3 className='mb-3 mt-4'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='w-100'>
                <div className='position-relative text-white'>
                    <img className='w-100' src={bg} alt="" />
                    <div className='position-absolute top-0 p-5 text-center'>
                        <h2 className='mb-4'>Create an Amazing Newspaper</h2>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <p className='bg-danger text-white fs-4 fw-bold py-3 px-4 m-0'>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;