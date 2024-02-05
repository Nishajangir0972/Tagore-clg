import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Notice/Notice.css'
import axios from "axios"
import { context } from '../../App';



const NoticeForm = () => {
    const { serverLink } = useContext(context)
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('');
    const [Photo, setPhoto] = useState('')



    const student = async () => {
        if (!content, !subject) {
            alert("please write down the notice")
        }
        else {
            const formData = new FormData();
            formData.append("Subject", subject)
            formData.append("Content", content)
            formData.append("Photo", Photo)

            let result = await axios.post(`${serverLink}/AdminNotice/notice`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            result = result.data
            // setContent(result)
            // console.log(result)
            alert("Your Notice has been send")
            setSubject('')
            setContent('')
        }


    }

    return (
        <>
            <div className='heder'>
                <h1>Tagore P.G College Gudha Gorji </h1>
                <h2>NOTICE</h2>
                <Form >
                    <Form.Group controlId="formContent">
                        <Form.Label className='sub'>Subject</Form.Label>
                        <Form.Control
                        className='noticePage'
                            required
                            type='text'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <Form.Control
                            className='textArea'
                            as="textarea"
                            // rows={3}
                            placeholder="Enter notice content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required

                        />
                        <div className="photto">
                            <Form.Control
                                required
                                type="file"
                                onChange={(e) => setPhoto(e.target.files[0])}
                            />
                        </div>
                        <div className="btn2">
                            <Button onClick={(e) => {
                                e.preventDefault()
                                student()
                            }}
                                type='submit'>Send</Button>
                        </div>
                    </Form.Group>

                </Form>
            </div>
        </>
    );
};

export default NoticeForm;
