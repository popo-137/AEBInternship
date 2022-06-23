import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown,} from "react-bootstrap";


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
                        <Button href="#login" variant="primary">Войти</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;