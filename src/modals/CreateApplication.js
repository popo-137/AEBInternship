import React, {useState, useEffect,useContext} from 'react';
import {Button, Dropdown,Form, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createApplication, fetchDegrees, fetchUniversitys} from "../http/applicationAPI";
import { observer } from 'mobx-react-lite';

const CreateApplication = observer(({show, onHide}) => {
    const {application} = useContext(Context)
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [age, setAge] = useState()
    const [kurs, setKurs] = useState()
    const [skills, setSkills] = useState('')

    useEffect(()=>{
        fetchUniversitys().then(data => {
    
            application.setUniversitys(data)})

        fetchDegrees().then(data => {
            
            application.setDegrees(data)

        })
    },[])

    const addApplication = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('patronymic', patronymic)
        formData.append('kurs', kurs)
        formData.append('skills', skills)
        formData.append('university', application.selectedUniversity.id)
        formData.append('current_degree', application.selectedDegree.id)
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
                <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{application.selectedDegree.degree_name || "Выберите степень образования которую вы получаете"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {application.degrees.map(degree =>
                                <Dropdown.Item
                                    onClick={() => application.setSelectedDegree(degree)}
                                    key={degree.id}
                                >
                                    {degree.degree_name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{application.selectedUniversity.uname || "Выберите институт на котором обучаетесь"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {application.universitys.map(university =>
                                <Dropdown.Item
                                    onClick={() => application.setSelectedUniversity(university)}
                                    key={university.id}
                                >
                                    {university.uname}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
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
});

export default CreateApplication;