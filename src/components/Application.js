import React from 'react';
import {Card, Col, Table} from "react-bootstrap";

import {useNavigate} from 'react-router-dom';
import {APPLICATION_ROUTE} from "../utils/consts";

const Application = ({application}) => {
    const navigate = useNavigate()
    return (
        <tbody>
        <tr>
          <td>{application.id}</td>
          <td>{application.surname}</td>
          <td>{application.name}</td>
          <td>{application.patronymic}</td>
          <td>{application.age}</td>
          <td>{application.university}</td>
          <td>{application.current_degree}</td>
          <td>{application.kurs}</td>
          <td>{application.skills}</td>
          <td>{application.is_accepted}</td>
        </tr>
      </tbody>
    );
};

export default Application;