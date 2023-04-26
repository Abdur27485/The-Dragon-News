import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
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
            <div className='p-2 mb-2 bg-secondary-subtle d-flex align-items-center'>
                <Button variant='danger' className='rounded-0'>Latest</Button>
                <Marquee autoFill={true} speed={50} pauseOnHover={true} gradient={true} gradientColor={[226, 227, 229]} gradientWidth={50}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant='secondary' className='rounded-0'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;