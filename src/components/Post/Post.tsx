import React from 'react';
import {Card} from "react-bootstrap";

const Post: React.FC = () => {
    return (
        <Card>
            <Card.Header>Author (prop)</Card.Header>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title>Message (prop)</Card.Title>
                    <Card.Text>
                        Date(prop).
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;