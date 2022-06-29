import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createApplication} from "../http/applicationAPI";

const CreateApplication = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const addApplication = () => {
        const formData = new FormData()
        formData.append('name', name)
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
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ФИО"
                    />
                    <Form.Control
                        value={age}
                        onChange={e => setAge(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите ваш возраст"
                        type="number"
                    />

            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addApplication}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateApplication;