import { useState } from "react";
import { Layout } from "../Component/Layout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { Login } from "../Apiservices/ApiServices";



export function LoginPage() {
    const [login, setLogin] = useState({})
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handledone = async (e) => {
        try {
            e.preventDefault()
            await Login(login)
            localStorage.setItem('user', JSON.stringify({ ...login, password: "" }))
            message.success("Login Successfully")
            navigate('/')


        } catch (error) {
            console.log(error);
            message.error("Something Went Wrong Please Re-Enter")
            navigate('/login')
        }
    }
    return (
        <div className="bg">
            <Layout title='Login-Page'>

                <div className="form-container ">
                    <Container >
                        <Row>
                            <Col lg={6}>
                                <div className="image1">
                                    <img src="/hellologin.jpg" style={{ width: '100%' }} alt="not found"></img>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>

                                    <Form onSubmit={handledone} style={{ width: "360px" }}>
                                        <h3 style={{ color: "white" }}>     LOGIN FORM</h3>


                                        <Row style={{ width: "350px" }}>

                                            <Col lg={12}>

                                                <Form.Group className="mb-3" >
                                                    <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handlesubmit} />
                                                </Form.Group>

                                            </Col>
                                            <Col lg={12}>

                                                <Form.Group className="mb-3">
                                                    <Form.Control type="password" placeholder="Enter Password" name="password" onChange={handlesubmit} />
                                                </Form.Group>

                                            </Col>

                                            <Col lg={12}>

                                                <Button variant="primary" type="submit" className="btn btn success">
                                                    Login
                                                </Button>
                                            </Col>
                                        </Row>

                                    </Form>
                                </div>

                            </Col>
                        </Row>

                    </Container>
                </div>
            </Layout>
        </div>

    )

}