import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../Component/Layout";
import { Heading } from "../Component/Heading";
import { useState } from "react";

import { message } from 'antd'
import { tasksave } from "../Apiservices/ApiServices";
import { useNavigate } from "react-router-dom";



export function AddTask() {
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const handlesubmit = async (e) => {
        try {
            e.preventDefault(); 
            await tasksave(data)
            message.success("Add-Task Successfully")
            navigate('/tasklist')

        } catch (error) {
            message.error("Something Went Wrong")
        }

    }


    return (
        <Layout>
            <Container>
                <Heading title={<h1>Add-Task</h1>}></Heading>
                <Form onSubmit={handlesubmit}>

                    <Row>
                        <Col lg={6}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={handlechange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" onChange={handlechange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" name="deadline" onChange={handlechange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col lg={4}>

                        <Button variant="primary" type="submit">Add-Task</Button>
                    </Col>
                </Form>

            </Container>
            

        </Layout>
    )

}