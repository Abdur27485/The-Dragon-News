import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div className="mb-5">
                <h4>Login With</h4>
                <Button variant='outline-primary mb-2 w-100'> <FaGoogle /> Login with Google</Button>
                <Button variant='outline-secondary w-100'> <FaGithub /> Login with Github</Button>
            </div>
            <div>
                <h4 className='mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary' /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-4 position-relative'>
                <img src={bg} className='w-100' />
                <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
                    <h2 className='fw-bold lh-base mb-3'>Create an Amazing Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant='danger' className='fw-bold rounded-0 py-3 px-3 fs-5 mt-3'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;