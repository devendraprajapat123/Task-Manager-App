import { message } from 'antd';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';

export function Header() {
    const user = localStorage.getItem('user')
    const navigate = useNavigate()
    console.log(user);
    const handlelogout = () => {
        localStorage.removeItem('user')
        message.success("Logout Successfully")
        navigate('/login')
    }
    const register = () => {
        navigate('/register')
    }
    const login = () => {
        navigate('/login')
    }
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
                            {
                                !user ? (<>
                                    <li className="nav-item">
                                        <NavLink onClick={register} className="nav-link" >Register</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink onClick={login} className="nav-link" >Login</NavLink>
                                    </li></>) : (<>

                                        <NavLink to="/login" onClick={handlelogout} className="nav-link" >Logout</NavLink>
                                    </>)
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )

}