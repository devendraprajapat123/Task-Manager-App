import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-primary" bg="primary">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: "white", fontSize: "30px" }}>Task-Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <LinkContainer to='/'><Nav.Link style={{ color: "white", fontSize: "17px" }}>Home</Nav.Link></LinkContainer>
                            <LinkContainer to='/addtask'><Nav.Link style={{ color: "white", fontSize: "17px" }}>Add-Task</Nav.Link></LinkContainer>
                            <LinkContainer to='/tasklist'><Nav.Link style={{ color: "white", fontSize: "17px" }}>Task-List</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )

}