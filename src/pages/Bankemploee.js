import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {fetchApplications,fetchDegrees, fetchUniversitys} from "../http/applicationAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ApplicationList from '../components/ApplicationList';

const Bankemploee = observer(() => {

    const {application} = useContext(Context)

    useEffect(() => {
            fetchApplications().then(data => {

            application.setApplications(data)

            fetchUniversitys().then(data => {
    
                application.setUniversitys(data)})
    
            fetchDegrees().then(data => {
                
                application.setDegrees(data)
    
            })
        })
    },[])

    return (
<div>
        <Container>
        <h5>Список заявок на прохождение практики</h5>
<ApplicationList/>
    </Container>
</div>
    );
});

export default Bankemploee;