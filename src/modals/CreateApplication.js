import React, {useState, useEffect,useContext} from 'react';
import {Button, Dropdown,Form, Modal,Col,Row} from "react-bootstrap";
import {Context} from "../index";
import {createApplication, fetchDegrees, fetchUniversitys} from "../http/applicationAPI";
import { observer } from 'mobx-react-lite';




const CreateApplication = observer(({show, onHide}) => {
    
    const {application} = useContext(Context)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [age, setAge] = useState()
    const [group, setGroup] = useState('')
    const [kurs, setKurs] = useState()
    const [skills, setSkills] = useState('')
    const [univ, setUniv] = useState('')
    

    useEffect(()=>{
        fetchUniversitys().then(data => {
    
            application.setUniversitys(data)})

        fetchDegrees().then(data => {
            
            application.setDegrees(data)

        })
    },[])


    const addApplication = () => {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('patronymic', patronymic)
        formData.append('age', `${age}`)
        formData.append('kurs', `${kurs}`)
        formData.append('univ', univ)
        formData.append('group', group)
        formData.append('skills', skills)
        formData.append('university', application.selectedUniversity.id)
        formData.append('current_degree', application.selectedDegree.id)
        


        createApplication(formData).then(data => onHide())
        
    }
    
    return (
        
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Заявка на прохождение практики
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
        
            <Form.Control 
            type="text"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите e-mail"
                        
                    />
                    <Row>
                    <Form.Group as={Col}>
                    <Form.Control 
                        value={surname}
                        onChange={e => setSurName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите Фамилию"
                    />
                    </Form.Group>
                    <Form.Group as={Col}>
                <Form.Control 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder="Введите Имя"
                />
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Control
                    value={patronymic}
                    onChange={e => setPatronymic(e.target.value)}
                    className="mt-3"
                    placeholder="Введите Отчество"
                />
                </Form.Group>
                </Row>
                <Form.Control
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    className="mt-3"
                    placeholder="Сколько вам лет"
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
                        <Dropdown.Toggle>{application.selectedUniversity.uname || "Выберите университет на котором обучаетесь"}</Dropdown.Toggle>
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
                    value={univ}
                    onChange={e => setUniv(e.target.value)}
                    className="mt-3"
                    placeholder="В каком подразделении вы обучаетесь"

                />
                    <Form.Control
                    value={group}
                    onChange={e => setGroup(e.target.value)}
                    className="mt-3"
                    placeholder="В какой группе вы обучаетесь"

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
<Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
       
            </Modal.Body>
            <Modal.Footer>
                
            <p align="left">Письмо с результатми отбора придет вам на почту.</p>
            
                <Button variant={"outline-success"} onClick={addApplication}>Добавить</Button>
            </Modal.Footer>
        </Modal>
        
        )}
        
    );


export default CreateApplication;