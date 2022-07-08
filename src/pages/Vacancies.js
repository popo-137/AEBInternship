import React from 'react';
import { Col ,Row,Accordion, Container} from 'react-bootstrap';

const Vacancies = () => {
    return (
        <Container>
        <div align="center">
            <h2>УИР</h2>
            <Row>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="0">
        <Accordion.Header>Практикант в УИР</Accordion.Header>
        <Accordion.Body align="left">
        - Практика в виде участия в проектных командах по разработке программного обеспечения;<br/>
- Решение реальных кейсов и задач от наставников;<br/>
- Участие во встречах и обсуждениях с ИТ-специалистами Банка.<br/>
Продолжительность: 3-4 недели.<br/>
Период: Июнь-июль 2022 г.<br/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="1">
        <Accordion.Header>Стажер в УИР</Accordion.Header>
        <Accordion.Body align="left">
        - Обучение студентов в сроки их учебных и производственных практик (июнь);<br/>
- Стажировка в подразделении Банка по техническому сопровождению ИТ (июль, август)*.<br/>
Продолжительность: 3 месяца.<br/>
Период: Июнь-август 2022 г.<br/>
* стажировка после прохождения этапа обучения - оплачивается.<br/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </Col>
            </Row>
        </div>
        <div align="center">
                <h2>УИТ</h2>
                <Row>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="2">
        <Accordion.Header>Практикант в УИТ</Accordion.Header>
        <Accordion.Body align="left">
        - Практика в виде участия в проектных командах по разработке программного обеспечения;<br/>
- Решение реальных кейсов и задач от наставников;<br/>
- Участие во встречах и обсуждениях с ИТ-специалистами Банка.<br/>
Продолжительность: 3-4 недели.<br/>
Период: Июнь-июль 2022 г.<br/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="3">
        <Accordion.Header>Стажер в УИТ</Accordion.Header>
        <Accordion.Body align="left">
        - Обучение студентов в сроки их учебных и производственных практик (июнь);<br/>
- Стажировка в подразделении Банка по техническому сопровождению ИТ (июль, август)*.<br/>
Продолжительность: 3 месяца.<br/>
Период: Июнь-август 2022 г.<br/>
* стажировка после прохождения этапа обучения - оплачивается.<br/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </Col>
            </Row>
            </div>
            <div align="center">
                <h2>УПК</h2>
                <Row>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="4">
        <Accordion.Header>Практикант в УПК</Accordion.Header>
        <Accordion.Body align="left">
        - Практика в виде участия в проектных командах по разработке программного обеспечения;<br/>
- Решение реальных кейсов и задач от наставников;<br/>
- Участие во встречах и обсуждениях с ИТ-специалистами Банка.<br/>
Продолжительность: 3-4 недели.<br/>
Период: Июнь-июль 2022 г.<br/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </Col>
                <Col>
                <Accordion>
                <Accordion.Item eventKey="5">
        <Accordion.Header>Стажер в УПК</Accordion.Header>
        <Accordion.Body align="left">
        - Обучение студентов в сроки их учебных и производственных практик (июнь);<br/>
- Стажировка в подразделении Банка по техническому сопровождению ИТ (июль, август)*.<br/>
Продолжительность: 3 месяца.<br/>
Период: Июнь-август 2022 г.<br/>
* стажировка после прохождения этапа обучения - оплачивается.<br/>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </Col>
            </Row>
            </div>
            </Container>
    );
};

export default Vacancies;