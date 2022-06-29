import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createApplication} from "../http/applicationAPI";

const CreateApplication = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [age, setAge] = useState()
    const [university, setUniversity] = useState('')
    const [kurs, setKurs] = useState()
    const [skills, setSkills] = useState('')


    const addApplication = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('patronymic', patronymic)
        formData.append('university', university)
        formData.append('kurs', kurs)
        formData.append('skills', skills)


        formData.append('age', `${age}`)


        createApplication(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Заявка на прохождение практики
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form.Control
                        value={surname}
                        onChange={e => setSurName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите Фамилию"
                    />
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder="Введите Имя"
                />
                <Form.Control
                    value={patronymic}
                    onChange={e => setPatronymic(e.target.value)}
                    className="mt-3"
                    placeholder="Введите Отчество"
                />
                <Form.Control
                    value={age}
                    onChange={e => setAge(Number(e.target.value))}
                    className="mt-3"
                    placeholder="Введите ваш возраст"
                    type="number"
                />
                <Form.Control
                    value={university}
                    onChange={e => setUniversity(e.target.value)}
                    className="mt-3"
                    placeholder="Где вы обучаетесь"
                />
                <Form.Control
                    value={kurs}
                    onChange={e => setKurs(Number(e.target.value))}
                    className="mt-3"
                    placeholder="На каком курсе вы обучаетесь"
                    type="number"
                />
                <Form.Control as="textarea" rows={3}
                    value={skills}
                    onChange={e => setSkills(e.target.value)}
                    className="mt-3"
                    placeholder="Какими навыками вы обладаете"

                />

            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addApplication}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateApplication;