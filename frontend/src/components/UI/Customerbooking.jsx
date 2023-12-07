import React, { useState,useEffect } from "react";
import API from '../../API';
import Table from 'react-bootstrap/Table';
import Headers from '../Header/Headers'

const Customerbooking = () => {
  const [Booking, setbooking] = useState([]);

  useEffect(() => {
    refreshBooking();

  }, []);

  const refreshBooking = () => {
    API.get("/rental/")
      .then((res) => {
        setbooking(res.data);
      })
      .catch(console.error);
  };
  return (
    <div style={{marginTop:'10%',marginLeft:'2%'}}>
      <Headers/>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>

            <th>Firstname</th>
            <th>Secondname</th>
            <th>email</th>
            <th>Ph.no</th>
            <th>from</th>
            <th>To</th>
            <th>date</th>
            <th>time</th>
            <th>message</th>
            <th>payment</th>
            <th>carname</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Booking.map((item, index) => {
            return (
              <tr key={index}>

                <td>{item.booking_firstname}</td>
                <td>{item.booking_lastname}</td>
                <td>{item.booking_email}</td>
                <td>{item.booking_phone}</td>
                <td>{item.booking_fromaddress}</td>
                <td>{item.booking_toaddress}</td>
                <td>{item.booking_date}</td>
                <td>{item.booking_time}</td>
                <td>{item.booking_message}</td>
                <td>{item.booking_payment}</td>
                <td>{item.car_name}</td>


              </tr>
            );


          })}

        </tbody>
      </Table>
    </div>
  )
}

export default Customerbooking