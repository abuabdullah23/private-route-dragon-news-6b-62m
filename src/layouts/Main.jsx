import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    {/* Left Nav */}
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    {/* Main Nav */}
                    <Col lg={6}>
                        <h3>Main Content Coming</h3>
                    </Col>

                    {/* Right Nav */}
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;