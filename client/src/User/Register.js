import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../Component/Layout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { message } from "antd";
import { Register } from "../Apiservices/ApiServices";


export function RegisterPage() {
    const [register, setRegister] = useState({})
    const navigate = useNavigate()

    const handlesubmit = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })

    }
    console.log(register);
    const handledone = async (e) => {
        try {
            e.preventDefault();
            await Register(register)
            message.success("Register Successfully")
            navigate('/login')
        } catch (error) {
            console.log(error);
            message.error("Something Went Wrong")
        }


    }
    return (
        <Layout title='Register-Page'>
            <div className="form-container ">
                <Container className="mt-4">
                    <Row>
                        <Col lg={6}>
                            <div className="image1 ">
                                <img src="/registerimage.png" style={{ width: '100%' }} alt="not found"></img>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="form-container mb-3" >

                                <Form onSubmit={handledone}>
                                    <h3 style={{ color: "white" }}>REGISTER-FORM</h3>
                                    <Row style={{ width: "350px" }}>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3" >

                                                <Form.Control type="text" placeholder="Name" name="name" onChange={handlesubmit} required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <div onChange={handlesubmit} className="mb-3" placeholder="Enter Your Gender" style={{ color: "white" }}>
                                                <input type="radio" value="Male" name="gender" className="m-1" /> Male &nbsp;&nbsp;
                                                <input type="radio" value="Female" name="gender" className="m-1" /> Female &nbsp;&nbsp;
                                                <input type="radio" value="Other" name="gender" className="m-1" /> Other
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="email" placeholder="Email" name="email" onChange={handlesubmit} required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="number" placeholder="Phone" name="phone" onChange={handlesubmit} required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="password" placeholder="Password" name="password" onChange={handlesubmit} required />
                                            </Form.Group>

                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" placeholder="Address" name="address" onChange={handlesubmit} required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" placeholder="Enter Your Favourite Cricketer" name="answer" onChange={handlesubmit} required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <div>
                                                <Link to="/login" style={{ color: "black" }}>Already Register ? Cleck Here to Login</Link>&nbsp;&nbsp;

                                                <Button variant="primary" type="submit" className="btn btn success mt-2">
                                                    Register
                                                </Button>

                                            </div>


                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )

}