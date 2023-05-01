import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBookmark, BsShare, BsFillEyeFill } from "react-icons/bs";
import ReactStars from 'react-stars';
import moment from 'moment/moment';

const NewsCard = ({ news }) => {
    const { title, details, author, image_url, _id, total_view,rating } = news;
    const { name, published_date, img } = author;
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex justify-content-between align-items-center border-0 py-3'>
                <div className='d-flex align-items-center'>
                    <img src={img} className='rounded-circle' style={{ maxWidth: '60px', maxHeight: '60px' }} />
                    <div className='ms-3'>
                        <h5 className='mb-1'>{name}</h5>
                        <p className='m-0 text-secondary'>{moment(published_date)?.format('YYYY-MM-DD')}</p>
                    </div>
                </div>
                <div className='fs-4'>
                    <BsBookmark className='me-3'></BsBookmark>
                    <BsShare></BsShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <img src={image_url} className='w-100 h-100 my-3 ' />
                <Card.Text>{details > 250 ? details : <>{details.slice(0, 250)}...<Link className='link-warning' to={`/news/${_id}`}>Read More</Link></>}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-secondary mx-5 bg-white d-flex justify-content-between align-items-center p-0">
                <div>
                    <ReactStars edit={false} value={rating.number} size={24}></ReactStars>
                </div>
                    <span className='d-flex align-items-center'><BsFillEyeFill className='fs-4 me-2'></BsFillEyeFill>
                    {total_view}</span>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;