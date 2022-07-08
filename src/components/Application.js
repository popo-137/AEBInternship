import React from 'react';



const Application = ({application}) => {
    
    return (
        <tbody>
        <tr>
          <td>{application.id}</td>
          <td>{application.email}</td>
          <td>{application.surname}</td>
          <td>{application.name}</td>
          <td>{application.patronymic}</td>
          <td>{application.univ}</td>
          <td>{application.inst}</td>
          <td>{application.group}</td>
          <td>{application.deg}</td>
          <td>{application.kurs}</td>
          <td>{application.skills}</td>
        </tr>
      </tbody>
    );
};

export default Application;