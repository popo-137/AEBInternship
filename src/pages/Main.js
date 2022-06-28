import React from 'react';
import {Button, Col, Row } from "react-bootstrap";
import {APPLICATION_ROUTE, VACANCIES_ROUTE} from "../utils/consts";

const Main = () => {

    return (
        <div className="container-sm" align="center">
            <div
                className=""
                style={{
                    backgroundColor: "#27303E",
                    backgroundImage:
                        "url(" + require("../assets/bg3.jpg").default + ")",
                    backgroundPosition: "center"
                }}
            >
                <div className="" >
                    <h1 className="text-white pt-5" >
                        Практика студентов 2023
                    </h1>
                    <div className="container-xs">
                        <p className="m-0 mb-32 text-white" >
                            Для участия в практике нужно подать заявку на участие до 30 мая 2023 года включительно.
                        </p>
                        <div className="py-5">
                                <Button  variant="outline-primary"  href={VACANCIES_ROUTE} >
                                    Посмотреть вакансии
                                </Button>
                                <Button  variant="outline-primary" className="m-lg-2" href={APPLICATION_ROUTE} >
                                    Подать заявку
                                </Button>

                        </div>
                    </div>
                </div>
            </div>
            <Row className="mt-5">
                <Col><h5>Новости и события</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Col>
                <Col><h5>Ближайшие даты</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Col>
                <Col><h5>Расписание</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Col>
            </Row>
                </div>


    );
};

export default Main;