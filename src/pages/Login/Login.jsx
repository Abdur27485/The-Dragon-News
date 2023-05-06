import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitleState from '../../hooks/UseTitleState';

const Login = () => {
    useTitleState('Login')
    return (
        <div className='w-50 shadow-lg mx-auto bg-light mt-5 border border-primary rounded p-3'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;