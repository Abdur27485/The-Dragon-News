import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const MarqueeContainer = () => {
    return (
        <Container>
            <div className='p-2 mb-2 bg-secondary-subtle d-flex align-items-center'>
                <Button variant='danger' className='rounded-0'>Latest</Button>
                <Marquee autoFill={true} speed={50} pauseOnHover={true} gradient={true} gradientColor={[226, 227, 229]} gradientWidth={50}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Marquee>
            </div>
        </Container>
    );
};

export default MarqueeContainer;