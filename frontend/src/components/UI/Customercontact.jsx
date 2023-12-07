import React, { useState,useEffect } from "react";
import API from '../../API';
import Table from 'react-bootstrap/Table';
import Headers from '../Header/Headers'


const Customercontact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    refreshContact();

  }, []);

  const refreshContact = () => {
    API.get("/contact/")
      .then((res) => {
        setContact(res.data);
      })
      .catch(console.error);
  };
  return (
    <div style={{marginTop:'10%',marginLeft:'2%'}}>
      <Headers/>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>

            <th>Name</th>
            <th>Email</th>
            <th>Ph.no</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contact.map((item, index) => {
            return (
              <tr key={index}>

                <td>{item.c_name}</td>
                <td>{item.c_email}</td>
                <td>{item.c_phno}</td>
                <td>{item.c_message}</td>
   


              </tr>
            );


          })}

        </tbody>
      </Table>
    </div>
  )
}

export default Customercontact