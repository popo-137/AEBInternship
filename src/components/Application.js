import React from 'react';
import {Card, Col, Table} from "react-bootstrap";

import {useNavigate} from 'react-router-dom';
import {APPLICATION_ROUTE} from "../utils/consts";

const Application = ({application}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(APPLICATION_ROUTE + '/' + application.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={"light"}>
                
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{application.surname}</div>
                    <div className="d-flex align-items-center">
                        <div>{application.name}</div>
                        
                    </div>
                </div>
                <div>{application.age}</div>
            </Card>
        </Col>
    );
};

export default Application;