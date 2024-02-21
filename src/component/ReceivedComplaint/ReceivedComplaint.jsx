import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { context } from '../../App';
import axios from 'axios';
import '../ReceivedComplaint/ReceivedComplaint.css'


function ReceivedComplaint() {
  const { serverLink } = useContext(context)
  const [showComplain, setshowComplain] = useState([]);
  

  useEffect(() => {
    ReceiveComplain()
  }, [])

  const ReceiveComplain = async () => {
    let result = await axios.get(`${serverLink}/Complaint/showComplain`)
    result = result.data
    // console.log(result);
    setshowComplain(result.reverse())
  }




  return (
    <Container>
      <Row>
        {showComplain.map((Complain, index) => (
          <Col lg={4} md={6} sm={12} key={index}>

            <div className='ReciveComplain'>

              <Card className='complaint'>
            <input type="checkbox" className='success' id='checkBox'/>

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
                  <Button variant={Complain.resolved ? "success" : "primary"}
                  >Resolved</Button>
                </Card.Body>
              </Card>

            </div>
          </Col>

        ))}
      </Row>
    </Container>
  )
}

export default ReceivedComplaint


