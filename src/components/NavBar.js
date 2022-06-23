import React from 'react';
import { Container, Nav, Navbar, NavDropdown, } from "react-bootstrap";


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="blue">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/unnamed (1).png"
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                AEB.Internship
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#info">Общая информация</Nav.Link>
                        <Nav.Link href="#bankemploee">Сотрудникам банка</Nav.Link>
                        <Nav.Link href="#students">Студентам</Nav.Link>
                        <Nav.Link href="#uniemploee">Сотрудникам ВУЗов</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;