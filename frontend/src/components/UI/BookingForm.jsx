import React, { useState,useEffect } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import API from '../../API';
import { Col } from "reactstrap";
import Swal from 'sweetalert2';

const BookingForm = ({carName = "", }) => {
  const [ booking_firstname, setbooking_firstname] = useState("");
  const [ booking_lastname, setbooking_lastname] = useState("");
  const [ booking_email, setbooking_email] = useState("");
  const [ booking_phone, setbooking_phone] = useState("");
  const [ booking_fromaddress, setbooking_fromaddress] = useState("");
  const [ booking_toaddress, setbooking_toaddress] = useState("");
  const [ booking_date, setbooking_date] = useState("");
  const [ booking_time, setbooking_time] = useState("");
  const [ booking_message, setbooking_message] = useState("");
  const [ booking_payment, setbooking_payment] = useState("");


  useEffect(() => {
    refresh();

  }, []);

  const refresh= () => {
    API.get("/")
      .then((res) => {
        setbooking_firstname("");
        setbooking_lastname("");
        setbooking_email("");
        setbooking_phone("");
        setbooking_fromaddress("");
        setbooking_toaddress("");
        setbooking_date("");
        setbooking_time("");
        setbooking_message("");
        setbooking_payment("");
      })
      .catch(console.error);

    }; 

    function popup(){
      Swal.fire({
        position: 'top-center',
        title: 'Booked Successfully',
        text: '',
        icon: 'success',
        confirmButtonText: false,
        timer:2900
      })
    }

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { booking_firstname, booking_lastname, booking_email, booking_phone, booking_fromaddress, booking_toaddress, booking_date, booking_time, booking_message, booking_payment, car_name: carName };
    API.post("/rental/", item).then(() => popup(),refresh()
      // console.log("result", res)
      // refresh()}
      );
  };




  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
    <div onSubmit={onSubmit} className="container" >
      <div className="forms">
    <Form>    
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" value={booking_firstname} onChange={(e) => setbooking_firstname(e.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" value={booking_lastname} onChange={(e) => setbooking_lastname(e.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" value={booking_email} onChange={(e) => setbooking_email(e.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" value={booking_phone} onChange={(e) => setbooking_phone(e.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" value={booking_fromaddress} onChange={(e) => setbooking_fromaddress(e.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" value={booking_toaddress} onChange={(e) => setbooking_toaddress(e.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" value={booking_date} onChange={(e) => setbooking_date(e.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          value={booking_time}
          onChange={(e) => setbooking_time(e.target.value)}
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          value={booking_message}
          onChange={(e) => setbooking_message(e.target.value)}
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
    </div>
    </div>
    </div>
    </Col>


    <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
    <div className="payments">
    <div className="payment">
      <label htmlFor="" className="d-flex align-items-center gap-2">
        <input type="radio" value="directbank" checked={booking_payment === "directbank"} onChange={(e) => setbooking_payment(e.target.value)}/> Direct Bank Transfer
      </label>
    </div>

    <div className="payment mt-3">
      <label htmlFor="" className="d-flex align-items-center gap-2">
        <input type="radio" value="checkpayment" checked={booking_payment === "checkpayment"} onChange={(e) => setbooking_payment(e.target.value)}/> Cheque Payment
      </label>
    </div>

    <div className="payment mt-3 d-flex align-items-center justify-content-between">
      <label htmlFor="" className="d-flex align-items-center gap-2">
        <input type="radio" name="" value="mastercard" checked={booking_payment === "mastercard"} onChange={(e) => setbooking_payment(e.target.value)}/> Master Card
      </label>

      <img src={masterCard} alt="" />
    </div>

    <div className="payment mt-3 d-flex align-items-center justify-content-between">
      <label htmlFor="" className="d-flex align-items-center gap-2">
        <input type="radio" value="paypal" checked={booking_payment === "paypal"} onChange={(e) => setbooking_payment(e.target.value)}/> Paypal
      </label>

      <img src={paypal} alt="" />
    </div>
    <div className="payment text-end mt-5">
      <button onClick={onSubmit}>Reserve Now</button>
    </div>
    </div>
    </div>
  </Col>

</>
    
  );
};

export default BookingForm;
