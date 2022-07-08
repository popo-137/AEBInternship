import React, {useState} from 'react';
import {Button,  Row,Accordion,Alert } from "react-bootstrap";
import { VACANCIES_ROUTE} from "../utils/consts";
import CreateApplication from "../modals/CreateApplication";

const Main = () => {
    const [applicationVisible, setApplicationVisible] = useState(false)

    
    return (
      
        <div  align="center" >
            <div
                className=""
                style={{
                    backgroundColor: "#27303E",
                    backgroundImage: "/bg3.jpg",
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
                                <Button  variant="outline-primary" className="m-lg-2" onClick={() => setApplicationVisible(true)} >
                                    Подать заявку
                                </Button>
                            <CreateApplication show={applicationVisible} onHide={() => setApplicationVisible(false)}/>
                        </div>
                    </div>
                </div>
            </div>
            <Row className="mt-5 justify-content-md-center" >
                
                    <div align="left" style={{width: 1200}}>
                    <h3>О нас</h3>
                    <p className="font-size:22">«Алмазэргиэнбанк» - крупнейший финансовый институт Якутии, объявляет отбор студентов для прохождения практики в Департаменте информационных технологий (ДИТ). <br/><br/> ДИТ - это команда профессионалов, которая разрабатывает инновационные продукты для различных направлений бизнеса и ведет техническое сопровождение ИТ Банка. Практика в ДИТ - это отличный старт для погружения в профессию ИТ.</p>
                <div className="pt-3">
                <h3>Практика в ДИТ</h3>
                <p>
                    - Практика в виде участия в проектных командах по разработке программного обеспечения;<br/>
                    - Решение реальных кейсов и задач от наставников;<br/>
                    - Участие во встречах и обсуждениях с ИТ-специалистами Банка.<br/>
                     Продолжительность: 3-4 недели.<br/>
                     Период: Июнь-июль 2023 г.<br/>
                </p>
                </div>
                   
                <div className="pt-3">
                <h3>Часто задаваемые вопросы</h3>
                   <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Что нужно для прохождения практики?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Как проходит отбор?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Оплачиваемая ли практика?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Сколько длится практика/стажировка?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Что нужно уметь?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
            </Row>
                </div>


    );
};

export default Main;