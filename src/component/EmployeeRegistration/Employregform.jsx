import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../EmployeeRegistration/Employregform.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { context } from '../../App';


function FormExample() {
    const { serverLink } = useContext(context)
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [userName, setUsername] = useState('');
    const [fathersName, setFathername] = useState('');
    const [mothersName, setMothername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailCheck, setemailCheck] = useState('')




    const AdminRegister = async () => {
        if (!firstName || !lastName || !userName || !fathersName || !phoneNo || !email || !password) {
            alert("please fill in all the fields")
            return;
        }
        else {
            // console.log(${serverLink}/admindata/Register);
            let result = await axios.post(`${serverLink}/admindata/Register`, {
                FirstName: firstName,
                LastName: lastName,
                UserName: userName,
                FatherName: fathersName,
                PhoneNo: phoneNo,
                Email: email,
                Password: password

            })
            result = result.data
            // console.log(result);
            if (result?.message === "Email already used") {
                alert("Email already used please use a different email");
            } 
            else if (result?.message === "Username already used") {
                alert("Username already in use please use a different username");
            } 
            else {
                alert("Successfully Registered");
                navigate("/adminlog");
            }
        }


    }




    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>

            <div className='container'>

                <div className="hadding">
                    <h1>EMPLOYEE REGISTRATION FORM</h1>
                    <h6>Enter your registration information below</h6>

                </div>

            </div>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="container">

                    <Row className=" mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='emploreg'>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstname(e.target.value)}
                            />

                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='emploreg'>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)}
                            />

                        </Form.Group>


                        <Form.Group as={Col} md="4" controlId="validation">
                            <Form.Label className='emploreg'>UserName </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Create a username"
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                    </Row>




                    <Row className=" mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='emploreg'>Father's Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Father's name"
                                value={fathersName}
                                onChange={(e) => setFathername(e.target.value)}
                            />

                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label className='emploreg'>Mother's name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Mother's name"
                                value={mothersName}
                                onChange={(e) => setMothername(e.target.value)}
                            />

                        </Form.Group>


                        <Form.Group as={Col} md="4" controlId="validation">
                            <Form.Label className='emploreg'>Phone Number </Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter your phone no."
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">

                        <Form.Group as={Col} md="4" controlId="validationCustom06">
                            <Form.Label className='emploreg'>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Email" required value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                {/* Please provide a valid zip. */}
                            </Form.Control.Feedback>
                        </Form.Group>



                        <Form.Group as={Col} md="4" controlId="validationCustom07">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" placeholder="Create your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <Form.Control.Feedback type="invalid">

                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>



                    <Row className="mb-3">
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                id='CheckCondition'
                            />
                        </Form.Group>
                    </Row>

                    <Button type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            const CheckCondition = document.getElementById("CheckCondition")
                            if (CheckCondition && !CheckCondition) {
                                alert("Please Agree to the terms and Conditions.");
                                return;
                            }
                            AdminRegister()
                        }}
                    >Submit</Button>
                </div>



            </Form>
        </>
    )
}

export default FormExample;