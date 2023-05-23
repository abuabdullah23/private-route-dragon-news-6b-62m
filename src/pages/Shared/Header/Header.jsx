import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Container } from 'react-bootstrap';
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
        </Container>
    );
};

export default Header;