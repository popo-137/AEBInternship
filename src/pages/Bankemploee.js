import React, {useContext, useEffect} from 'react';
import {Container, Pagination} from "react-bootstrap";
import Application from "../components/Application";
import {fetchApplications} from "../http/applicationAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ApplicationList from '../components/ApplicationList';

const Bankemploee = observer(() => {

    const {application} = useContext(Context)

    useEffect(() => {
        fetchApplications().then(data => {
            application.setApplications(data.rows)
           
        })
    },[])

    return (

        <Container>
<ApplicationList/>
</Container>

    );
});

export default Bankemploee;