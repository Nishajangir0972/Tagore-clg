import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { context } from '../../App';
import axios from 'axios';
import '../ReceivedComplaint/ReceivedComplaint.css'

function ReceivedComplaint() {
  const { serverLink } = useContext(context)
  const [showComplain, setshowComplain] = useState([])

  useEffect(() => {
    ReceiveComplain()
  }, [])

  const ReceiveComplain = async () => {
    let result = await axios.get(`${serverLink}/Complaint/showComplain`)
    result = result.data
    console.log(result);
    setshowComplain(result)
  }




  return (
    <Container>
      {showComplain.map((Complain, index) => (
        <div key={index} className='ReciveComplain'>
          <Row className='rows'>
            <Col  lg={4}>
              <Card className='complaint'>
                <Card.Body>
                  <Card.Text>Name: {Complain.Firstname}</Card.Text>
                  <Card.Text>
                    Roll No: {Complain.RollNo}
                  </Card.Text>
                  <Card.Text>
                    Email:  {Complain.Email}
                  </Card.Text>
                  <Card.Text>
                    Mobile No: {Complain.MobileNo}
                  </Card.Text>
                  <Card.Text>
                    Complain: {Complain.Complaint}
                  </Card.Text>
                  <Button variant="primary">Resolved</Button>
                </Card.Body>
              </Card>
            </Col>
        
          </Row>


        </div>
      ))}
    </Container>
  )
}

export default ReceivedComplaint