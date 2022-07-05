import React from 'react';
import {Container, Table ,Col,Row,Accordion} from "react-bootstrap";
import UncontrolledCarousel from '../components/UncontrolledCarousel';

const StudentsPage = () => {
    return (
        <Container>
            <UncontrolledCarousel/>
            
            <Row className='pt-4'>
            <Col>
            <h5>Наши команды в ДИТ</h5>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Управление инновационного развития (УИР)</Accordion.Header>
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
        <Accordion.Header>Сопровождение информационных технологий (СИТ)</Accordion.Header>
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
      <Accordion.Header>Управление пластиковых карточек (УПК)</Accordion.Header>
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
            </Col>
                <Col xs>
                <h5>Расписание</h5>
            <Table className="mt-32" striped bordered hover>
            <thead>
                <tr>
                    <th>Дата/<br />Период</th>
                    <th>Время<br />начала</th>
                    <th>Мероприятие</th>
                    <th>Ответственный</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>17.06.2022</td>
                    <td>10:00 ч.</td>
                    <td>Инструктаж</td>
                    <td>NaN</td>
                </tr>
                <tr>
                    <td>17.06.2022</td>
                    <td>14:15 ч.</td>
                    <td>Инструктаж</td>
                    <td>Баишев Г.М.</td>
                </tr>
                <tr>
                    <td>20.06.2022</td>
                    <td>17:00 ч.</td>
                    <td>Выдача заданий командам (IT-разработка + презентация + доклад)</td>
                    <td>Наставники все</td>
                </tr>
                <tr>
                    <td>23.06.2022</td>
                    <td>16:00 ч.</td>
                    <td>Первый показ промежуточных итогов</td>
                    <td>Наставники все</td>
                </tr>
                <tr>
                    <td>23.06.2022</td>
                    <td>17:00 ч.</td>
                    <td>Гибкое управление проектами</td>
                    <td>Макаров Константин Михайлович</td>
                </tr>
                <tr>
                    <td>27.06.2022</td>
                    <td>16:00 ч.</td>
                    <td>Второй показ промежуточных итогов</td>
                    <td>Наставники все</td>
                </tr>
                <tr>
                    <td>27.06.2022</td>
                    <td>17:00 ч.</td>
                    <td>Дизайн-хардкор: создание и анимация лендинга (3dsmax, Keyshot, PS, AE, Figma)</td>
                    <td>Тумусов Айаан Иванович</td>
                </tr>
                <tr>
                    <td>28.06.2022</td>
                    <td>16:00 ч.</td>
                    <td>"Войти в IT"</td>
                    <td>Никитина Марианна Дмитриевна</td>
                </tr>
                <tr>
                    <td>28.06.2022</td>
                    <td>17:00 ч.</td>
                    <td>Лекция о работе фронтенд-разработчика</td>
                    <td>Баишев Николай Павлович</td>
                </tr>
                <tr>
                    <td>29.06.2022</td>
                    <td>16:00 ч.</td>
                    <td>Лекция о работе аналитика</td>
                    <td>Архипова Анна Анатольевна</td>
                </tr>
                <tr>
                    <td>29.06.2022</td>
                    <td>17:00 ч.</td>
                    <td>Лекция о работе мобильного разработчика</td>
                    <td>Эверстов Артем Викторович</td>
                </tr>
                <tr>
                    <td>30.06.2022</td>
                    <td>16:00 ч.</td>
                    <td>Третий показ промежуточных итогов</td>
                    <td>Наставники все</td>
                </tr>
                <tr>
                    <td>30.06.2022</td>
                    <td>17:00 ч.</td>
                    <td>Лекция о работе тестировщика</td>
                    <td>Попов Арылхан Александрович<br />Бобровский Юрий Григорьевич</td>
                </tr>
                <tr>
                    <td>06.07.2022</td>
                    <td>18:00 ч.</td>
                    <td>Репетиция докладов, проверка презентаций, техническая проверка демонстрации разработки</td>
                    <td>Баишев Гавриил Михайлович</td>
                </tr>
                <tr>
                    <td>08.07.2022</td>
                    <td></td>
                    <td>Защита проектов (показ IT-разработки, презентация, выступление с докладом</td>
                    <td>Наставники все</td>
                </tr>
                <tr>
                    <td>08.07.2022</td>
                    <td></td>
                    <td>Награждение победителей</td>
                    <td>Наставники все</td>
                </tr>
                <tr>
                    <td>Июль</td>
                    <td></td>
                    <td>Передача практикантам документов о прохождении ими практики в АЭБ</td>
                    <td>Никитина М.Д. Баишев Г.М.</td>
                </tr>
            </tbody>
            
        </Table>
        </Col>
        </Row>
        </Container>
    );
};

export default StudentsPage;