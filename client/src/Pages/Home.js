
import { Container } from "react-bootstrap";
import { Heading } from "../Component/Heading";
import { Layout } from "../Component/Layout";



export function Home() {
    return (
        <Layout>
            <div >

                <Container >
                    <Heading title={<h1>Task-Manager - App</h1>} ></Heading>
                    <div className="img">

                        <img src="taskimage.png" className="img-fluid" alt="..." style={{ width: "100%" }}></img>
                    </div>
                </Container>
            </div>
        </Layout>
    )

}