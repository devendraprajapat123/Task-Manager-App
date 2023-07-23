import { Alert, Button, Card, Col, Container, Dropdown, Row, Spinner } from "react-bootstrap";
import { Layout } from "../Component/Layout";
import { useEffect, useState } from "react";
import { deletetask, fetchdata, markcompleted } from "../Apiservices/ApiServices";
import { Heading } from "../Component/Heading";
import { Link } from "react-router-dom";
import { Spin } from "antd";

export function TaskList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getdata = async (url) => {
        try {
            const response = await fetchdata(url)
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getdata('all')
    }, [])
    console.log(data);
    return (
        <Layout>
            <Container>

                <Heading title={<h1>Task-List</h1>}></Heading>
                <Container>

                    <Dropdown className="mb-3" onSelect={(k, e) => {
                        getdata(e.target.innerHTML)
                    }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select-Task
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/all">All</Dropdown.Item>
                            <Dropdown.Item href="#/completed">Completed</Dropdown.Item>
                            <Dropdown.Item href="#/pending">Pending</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>

                <Row>

                    {
                        loading ?
                            data.map
                                (
                                    (t) => {
                                        const date = t.deadline.split("T")

                                        const taskdate = new Date(date[0]).toDateString()

                                        return (



                                            <Col lg={4}>
                                                <Card style={{ width: '18rem' }} className="mb-3">
                                                    <Alert variant={t.isCompleted ? "success" : "danger"}>
                                                        {t.isCompleted ? "Completed" : "Pending"}

                                                    </Alert>
                                                    <Card.Body >
                                                        <Card.Title>{t.name}</Card.Title>
                                                        <Card.Text>
                                                            {t.description}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            {taskdate}
                                                        </Card.Text>
                                                        {
                                                            t.isCompleted ? (<>



                                                                <Link to={`/edittask/${t._id}`}><Button variant="primary" >Edit</Button></Link>

                                                                <Button variant="danger" style={{ marginLeft: "9px" }} onClick={async () => {
                                                                    await deletetask(t._id)
                                                                    getdata('all')
                                                                }}>Delete</Button>
                                                            </>

                                                            ) : (
                                                                <>
                                                                    <Link to={`/edittask/${t._id}`}><Button variant="primary" >Edit</Button></Link>

                                                                    <Button variant="danger" style={{ marginLeft: "9px" }} onClick={async () => {
                                                                        await deletetask(t._id)
                                                                        getdata('all')
                                                                    }}>Delete</Button>
                                                                    <Button variant="primary" style={{ marginLeft: "9px" }} onClick={async () => {
                                                                        await markcompleted(t._id)
                                                                        getdata('all')
                                                                    }}>Completed</Button>
                                                                </>
                                                            )
                                                        }



                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    }) : <Spin  tip="Loading" size="large"> </Spin>

                    }
                </Row>
            </Container>

        </Layout>
    )

}