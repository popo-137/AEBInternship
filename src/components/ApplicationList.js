import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row,Table } from "react-bootstrap";
import {Context} from "../index";
import Application from "./Application";

const ApplicationList = observer(() => {
    const {application} = useContext(Context)

    return (
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>e-mail</th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Университет</th>
          <th>Институт</th>
          <th>Группа</th>
          <th>Степень образования</th>
          <th>Курс</th>
          <th>Умения</th>
        </tr>
      </thead>
            {application.applications.map(application =>
                <Application key={application.id} application={application}/>
            )}
        </Table>
    );
});

export default ApplicationList;