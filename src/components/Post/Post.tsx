import React from 'react';
import {Card} from "react-bootstrap";

interface Props {
    author: string
    message: string
    date: string
}
const Post: React.FC<Props> = ({author, message, date}) => {
    return (
        <Card className='my-3 p-0'>
            <Card.Header>Author: {author}</Card.Header>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title>Message: {message}</Card.Title>
                    <Card.Text>
                        {date}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;