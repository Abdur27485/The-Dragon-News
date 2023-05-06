import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";
import useTitleState from '../../hooks/UseTitleState';



const News = () => {
    useTitleState('News Details')
    const {title, image_url, details, category_id} = useLoaderData()
    return (
        <div className='p-3 border rounded'>
            <Image src={image_url} rounded className='w-100'></Image>
            <h2 className='my-3'>{title}</h2>
            <p className='mb-4'>{details}</p>
            <Link to={`/category/${category_id}`}>
            <Button variant='danger' className='rounded-0'> <BsArrowLeft className=''></BsArrowLeft> All News In this Category</Button>
            </Link>
        </div>
    );
};

export default News;