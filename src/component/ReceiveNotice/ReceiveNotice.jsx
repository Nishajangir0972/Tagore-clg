import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { context } from '../../App';
import '../ReceiveNotice/ReceiveNotice.css'
import axios from 'axios';

function ReceiveNotice() {
    const { serverLink } = useContext(context);
    const [notice, setNotice] = useState({});

    useEffect(() => {
        showNotice();
    }, []);

    const showNotice = async () => {
        try {
            let result = await axios.get(`${serverLink}/AdminNotice/showNotice`);
            result = result.data;
            // console.log(result);
            setNotice(result.reverse());
        } catch (error) {
            console.error('Error fetching notice:', error);

        }
    };

    return (
        <Container>
            <div className='notice-box'>
                <Container>
                <Row>
                    {notice.length > 0 ? (
                        notice.map((notices, index) => (
                            <Col lg={4} md={6} sm={12}>
                            <div className='notice-recieve' key={index}>
                               
                                   
                                        <Card style={{ width: '18rem' }}>
                                            {notices.Photo && notices.Photo ? (
                                                <Card.Img variant="top" src={`${serverLink}/uploads/${notices.Photo.filename}`} />
                                                // <img src={`${serverLink}/uploads/${notices.Photo.filename}`} alt="Notice Photo" />
                                            ) : (
                                                <span>No photo available</span>
                                            )}
                                            <Card.Body>
                                            <Card.Text>Send Date : {notices.noticeDate}</Card.Text>
                                                <Card.Title>Subject : {notices.Subject}</Card.Title>
                                                <Card.Text>
                                                    {notices.Content}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        
                                   
                            </div>
                            </Col>
                        ))
                    ) : (
                        <div>
                            <p>No notice available</p>
                        </div>
                    )}
                  
                  </Row>
                </Container>
            </div>

        </Container>
    );
}

export default ReceiveNotice;