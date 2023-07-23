import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../Component/Layout";
import { Heading } from "../Component/Heading";
import { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { singledata, updatedata } from "../Apiservices/ApiServices";

export function EditTask() {
    const [form, setForm] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const fetchdata = async () => {
        const response = await singledata(id)
        setForm(response.data[0])

    }
    console.log(form.name);
    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const handlesubmit = async (e) => {
        try {
            e.preventDefault();
            await updatedata( form,id)
            message.success("Task-Edit successfully")
            navigate('/tasklist')
        } catch (error) {
            message.error("Something Went Wrong")
        }

    }
    return (
        <Layout>
            <Container>
                <Heading title={<h1>Edit-Task</h1>}></Heading>
                <Form onSubmit={handlesubmit}>

                    <Row>
                        <Col lg={6}>

                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={handlechange} value={form.name} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>

                            <Form.Group className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" onChange={handlechange} value={form.description} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>

                            <Form.Group className="mb-3" >
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" name="deadline" onChange={handlechange} value={form.deadline} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col lg={4}>

                        <Button variant="primary" type="submit">Edit-Task</Button>
                    </Col>
                </Form>

            </Container>

        </Layout>
    )

}