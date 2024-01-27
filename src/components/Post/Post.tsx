import React from 'react';
import {Card} from "react-bootstrap";

interface Props {
    author: string
    message: string
    date: string
}
const Post: React.FC<Props> = ({author, message, date}) => {
    const dirtyDate = new Date(date);
    const year = dirtyDate.getFullYear();
    const month = dirtyDate.getMonth() + 1;
    const day = dirtyDate.getDay();
    const hour = dirtyDate.getHours();
    const minutes = dirtyDate.getMinutes();

    return (
        <Card className='my-3 p-0'>
            <Card.Header className='d-flex justify-content-between'>
                <div>Author: {author}</div>
                <div>{day < 10 ? `0${day}` : day}/{month < 10 ? `0${month}` : month}/{year}</div>
            </Card.Header>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title>
                        Message: {message}
                    </Card.Title>
                    <Card.Text>
                        {hour < 10 ? `0${hour}` : hour}:{minutes < 10 ? `0${minutes}` : minutes}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;