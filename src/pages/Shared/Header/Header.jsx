import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='fw-bold text-secondary'>
                    <span className='text-black'>{moment().format('dddd, ')}</span>
                    {moment().format('MMMM D, YYYY')}
                </p>
            </div>
        </Container>
    );
};

export default Header;