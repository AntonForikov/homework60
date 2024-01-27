import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Message} from "../../types";

const SendMsg: React.FC = () => {
    const [message, setMessage] = useState<Message>({message: '', author: 'Anton'});
    const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage({message: e.target.value, author: 'Anton'});
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.message) {
            console.log(message);
            // handleAddMessage({
            //     id: Math.random(),
            //     ...movie
            // });
            setMessage({message: '', author: ''});
        } else {
            alert("Please enter message before send it.");
        }
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Your message:
                </Form.Label>
                <Col className='d-flex'>
                    <Form.Control type="text" placeholder="message" name="message" value={message.message} onChange={changeMessage} />
                    <Button className="ms-3" type='submit'>Send</Button>
                </Col>

            </Form.Group>
        </Form>
    );
};

export default SendMsg;