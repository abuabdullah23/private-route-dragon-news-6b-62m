import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Our Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam animi libero ad quibusdam sint possimus et? Tempore illo magni officiis libero! Quidem consequatur, blanditiis sequi cum nesciunt aspernatur aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam animi libero ad quibusdam sint possimus et? Tempore illo magni officiis libero! Quidem consequatur, blanditiis sequi cum nesciunt aspernatur aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam animi libero ad quibusdam sint possimus et? Tempore illo magni officiis libero! Quidem consequatur, blanditiis sequi cum nesciunt aspernatur aut.</p>

            <p>Go Back <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;