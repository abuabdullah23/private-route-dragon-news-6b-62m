import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaRegBookmark, FaEye, FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    const { _id, title, details, img, image_url, author, total_view, rating } = news;
    return (
        <Card className="text-left mb-3">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center flex-grow-1'>
                        <Image style={{ height: '40px', width: '40px' }} src={author?.img} roundedCircle />
                        <div className='ps-3 '>
                            <p className='mb-0'>{author?.name}</p>
                            <p className='mb-0'>{moment(author?.published_date).format('yyyy-MM-DD')}</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }

                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center gap-2'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.round(rating?.number)}
                        readOnly
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;