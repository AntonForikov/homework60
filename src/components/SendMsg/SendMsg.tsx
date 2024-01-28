import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {Message} from "../../types";
import axios from "axios";

interface Props {
    spinner: (loader: boolean) => void
    bool: boolean
}
const SendMsg: React.FC<Props> = ({spinner, bool}) => {
    const [message, setMessage] = useState<Message>({message: '', author: ''});
    const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const request = async () => {
        try {
            spinner(!bool);
            const url = 'http://146.185.154.90:8000/messages';
            const msg = message.message;
            const author = message.author;
            const data = new URLSearchParams();
            data.set('message', msg);
            data.set('author', author);
            await axios.post(url, data);
            spinner(!bool);
        } catch {
            alert('Please check requested URL.');
        }
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.message && message.author) {
            void request();
            setMessage({message: '', author: ''});
        } else {
            alert("Please enter username and message before send it.");
        }
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col className='d-flex'>
                    <Form.Control type="text" placeholder="username" name="author" value={message.author} onChange={changeMessage} />
                    <Form.Control className="ms-3" type="text" placeholder="message" name="message" value={message.message} onChange={changeMessage} />
                    <Button className="ms-3" type='submit'>Send</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default SendMsg;