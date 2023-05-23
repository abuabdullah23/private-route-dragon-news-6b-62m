import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = (event) => {
        console.log(event.target.checked);
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Register your account</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' required placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="photoUrl" name='photoUrl' required placeholder="Enter your photo Url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link to="/terms">Term & Conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text>
                    Already Have An Account ? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;