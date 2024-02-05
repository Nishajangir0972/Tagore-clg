// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Container } from 'react-bootstrap';
// import { useContext, useEffect, useState } from 'react';
// import { context } from '../../App';
// import '../ReceiveNotice/ReceiveNotice.css'
// import axios from 'axios';


// function ReceiveNotice() {
//     const { serverLink } = useContext(context);
//     const [notice, setNotice] = useState({});

//     useEffect(() => {
//         showNotice();
//     }, []);



//     const showNotice = async () => {
//         try {
//             let result = await axios.get(`${serverLink}/AdminNotice/showNotice`);
//             result = result.data;
//             // console.log(result[0]);
//             setNotice(result);
//         } catch (error) {
//             console.error('Error', error);

//         }
//     };

//     return (
//         <Container>
//             {notice.length > 0 ? (
//                 notice.map((notices, index) => (
//                     <div className='notice' key={index}>
//                         <Card style={{ width: '18rem' }}>
//                         {notices.Photo && notices.Photo ? (
//                              <Card.Img variant="top" src={`${serverLink}/uploads/${notices.Photo.filename}`} />
//                                 // <img src={`${serverLink}/uploads/${notices.Photo.filename}`} alt="Notice Photo" />
//                             ) : (
//                                 <span>No photo available</span>
//                             )}
//                             <Card.Body>
//                                 <Card.Title>{notices.Subject}</Card.Title>
//                                 <Card.Text>
//                                     {notices.Content}
//                                 </Card.Text>
//                            </Card.Body>
//                         </Card>
//                     </div>
//                 ))
//             ) : (
//                 <div>
//                     <p>No notice available</p>
//                 </div>
//             )}
//         </Container>
//     );
// }

// export default ReceiveNotice;
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
            setNotice(result);
        } catch (error) {
            console.error('Error fetching notice:', error);

        }
    };

    return (
        <Container>
            <div className='notice-box'>
                <Container>
                    {notice.length > 0 ? (
                        notice.map((notices, index) => (

                            <div className='notice-recieve' key={index}>
                                <Row className="notice-row">
                                    <Col className="notice-col" lg={3}>
                                        {/* <Card style={{ width: '18rem' }}>
                                            {notices.Photo && notices.Photo ? (
                                                <Card.Img variant="top" src={`${serverLink}/uploads/${notices.Photo.filename}`} />
                                                // <img src={`${serverLink}/uploads/${notices.Photo.filename}`} alt="Notice Photo" />
                                            ) : (
                                                <span>No photo available</span>
                                            )}
                                            <Card.Body>
                                                <Card.Title>{notices.Subject}</Card.Title>
                                                <Card.Text>
                                                    {notices.Content}
                                                </Card.Text>

                                            </Card.Body>
                                        </Card> */}






                                    </Col>
                                    <Col className='notice-col' lg={1}></Col>

                                    <Col className="notice-col" lg={3}>
                                        {/* <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" />
                                            <Card.Body>
                                                <Card.Title>{notices.Subject}</Card.Title>
                                                <Card.Text>
                                                    {notices.Content}
                                                </Card.Text>

                                            </Card.Body>
                                        </Card> */}
                                    </Col>
                                    <Col className='notice-col' lg={1}></Col>
                                    <Col className='notice-col' lg={3}>

                                    </Col>
                                </Row>


                            </div>
                        ))
                    ) : (
                        <div>
                            <p>No notice available</p>
                        </div>
                    )}


                </Container>
            </div>

        </Container>
    );
}

export default ReceiveNotice;