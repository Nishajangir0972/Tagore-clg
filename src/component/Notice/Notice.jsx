import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import{ Row,Col,Container}from 'react-bootstrap';
import '../Notice/Notice.css'
import axios from "axios"
import { context } from '../../App';



const NoticeForm = () => {
    const { serverLink } = useContext(context)
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [Photo, setPhoto] = useState('');
    const [noticeDate , setnoticeDate] = useState('')


    useEffect(()=>{
        const getDate = () =>{
            const now = new Date();
            const year = now.getFullYear();
            let month = now.getMonth()+ 1
            let day = now.getDate();

            month = month < 10 ?'0' + month : month;
            day = day < 10 ? '0' + day : day;

            return `${month}-${day}-${year}`;
        }
        setnoticeDate(getDate())
    },[])

    const student = async () => {
        if (!content, !subject) {
            alert("Please write down the notice")
        }
        else {
            const formData = new FormData();
            formData.append("Subject", subject)
            formData.append("Content", content)
            formData.append("Photo", Photo)
            formData.append("noticeDate", noticeDate)


            let result = await axios.post(`${serverLink}/AdminNotice/notice`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            result = result.data
            // setContent(result)
            console.log(result)
          
            alert("Your Notice has been send")
            setSubject('')
            setContent('')
            setnoticeDate('')
        }


    }

    return (
        <>
            <div className='heder'>
                <h1>Tagore P.G College Gudha Gorji </h1>
                <h2>NOTICE</h2>
                <Form >
                    <Form.Group controlId="formContent">
                        <Container>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={4}>
                            <Form.Label className='sub'>Subject</Form.Label>
                        <Form.Control
                        className='noticePage'
                            required
                            type='text'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                            </Col>
                            <Col lg={4}>
                            <Form.Label className='sub'>Date</Form.Label>
                        <Form.Control
                        className='noticePage'
                            required
                            type='text'
                            value={noticeDate}
                            // onChange={(e) => setnoticeDate(e.target.value)}
                        />
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                        </Container>
                       
                      
                        
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
