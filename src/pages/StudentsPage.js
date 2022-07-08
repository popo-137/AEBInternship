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
        Разработка программного обеспечения. В 2016 году в периметре банковской группы 
        была создана дочерняя компания «АЭБ АйТи», на площадке которой собрали перспективных ребят
         с компетенциями  в области финтеха. В 2019 году сотрудников перевели в головную кредитную организацию, 
         таким образом, тиражируя их знания и опыт на весь банк. Так было создано соответствующее подразделение разработчиков 
         для повышения скорости вывода на рынок новых продуктов и услуг, а также усилено подразделение ИТ поддержки 
         бизнеса и ИТ-поддержки сотрудников. С этой целью была изменена организационная структура Банка. Для цифровой
          трансформации Банка в соответствии с новой Стратегией развития Банковской группы АКБ «Алмазэргиэнбанк» АО на 2019–2022
           годы созданы: Управление инновационного развития, Офис трансформации, в целом усилен IT-блок в структуре Банка. В 2020 году тенденция 
           усиления IT-направления продолжилась, были созданы новые продуктовые команды в департаментах корпоративного и розничного бизнеса, а также увеличена
            численность Управления инновационного развития.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Управление информационных технологий (УИТ)</Accordion.Header>
        <Accordion.Body>
        Сопровождение имеющегося программного обеспечения
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>Управление пластиковых карточек (УПК)</Accordion.Header>
        <Accordion.Body>
        Банк постоянно совершенствует свою инфраструктуру для обслуживания пластиковых карт,
         расширяя терминальную и банкоматную сети. Количество электронных терминалов на 1 января
          2021 года превысило 1,4 тысячи штук, банкоматная сеть включает 283 банкомата, количество КСО — 109 штук.
           Для удобства обслуживания клиентов банкоматы расположены в офисах Банка, в местах высокой концентрации потенциальных клиентов,
            а также на территории предприятий — участников зарплатных проектов.
В 2020 году продолжилась активная работа по совершенствованию услуг дистанционного банковского обслуживания 
(ДБО) и привлечению клиентов к данным услугам. С помощью постоянной работы над улучшением сервиса и работы приложения
 «АЭБ Онлайн 3.0», разрабатываемого дочерней компанией Банка, удалось  достигнуть роста количества пользователей приложения более 
 чем на 26 %. Всего за 2020 год подключены к системе «АЭБ Онлайн» 19 тысяч клиентов. На 1 января  2021 года количество клиентов — 
 пользователей «АЭБ Онлайн» составило более 92 тысячи клиентов (29 % от общего количества розничных клиентов). В дальнейшем Банк продолжит
  работу над развитием функционала своих сервисов ДБО для повышения качества обслуживания клиентов.
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