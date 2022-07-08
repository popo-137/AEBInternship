import React from 'react';
import {Button, Container, Nav, Navbar,} from "react-bootstrap";
import {ADMIN_ROUTE, APPLICATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE,STUDENTS_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {

    const navigate = useNavigate()

    return (
        <Navbar expand="lg" bg="light" variant="blue">
            <Container>
                <Navbar.Brand href={MAIN_ROUTE}>
                <img
                    alt=""
                    src="/unnamed (1).png"
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                AEB.Internship
                    </Navbar.Brand>


                    <Nav className="me-auto">
                    <Nav.Link href={STUDENTS_ROUTE}>Студентам</Nav.Link>
                        {/* <Nav.Link href={ADMIN_ROUTE}>Список прошедших</Nav.Link> */}
                    
                        
                        
                    </Nav>
                    <Nav>
                        <Button
                            variant={"outline-black"}
                            href={"http://127.0.0.1:8000/admin"}
                        >
                            Вход для сотрудников
                        </Button>
                    </Nav>

            </Container>
        </Navbar>
    );
});

export default NavBar;