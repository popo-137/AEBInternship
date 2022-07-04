import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import Application from "./Application";

const ApplicationList = observer(() => {
    const {application} = useContext(Context)

    return (
        <Row className="d-flex">
            {application.applications.map(application =>
                <Application key={application.id} application={application}/>
            )}
        </Row>
    );
});

export default ApplicationList;