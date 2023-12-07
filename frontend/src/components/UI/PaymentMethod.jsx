// import React, { useState,useEffect } from "react";

// import masterCard from "../../assets/all-images/master-card.jpg";
// import paypal from "../../assets/all-images/paypal.jpg";
// import "../../styles/payment-method.css";
// import API from '../../API';

// const PaymentMethod = () => {

//   const [ booking_payment, setbooking_payment] = useState("");

//   useEffect(() => {
//     refresh();

//   }, []);

//   const refresh = () => {
//     API.get("/")
//       .then((res) => {
//         booking_payment("");
//       })
//       .catch(console.error);

//     }; 

//   const onSubmit = (e) => {
//     e.preventDefault();
//     let item = { booking_payment };
//     API.post("/rental/", item).then(() => refresh());
//   };


//   return (
//     <>
//     <div onSubmit={onSubmit} className="payment">
//       <label htmlFor="" className="d-flex align-items-center gap-2">
//         <input type="radio" value="directbank" checked={booking_payment === "directbank"} onChange={(e) => setbooking_payment(e.target.value)}/> Direct Bank Transfer
//       </label>
//     </div>

//     <div className="payment mt-3">
//       <label htmlFor="" className="d-flex align-items-center gap-2">
//         <input type="radio" value="checkpayment" checked={booking_payment === "checkpayment"} onChange={(e) => setbooking_payment(e.target.value)}/> Cheque Payment
//       </label>
//     </div>

//     <div className="payment mt-3 d-flex align-items-center justify-content-between">
//       <label htmlFor="" className="d-flex align-items-center gap-2">
//         <input type="radio" name="" value="mastercard" checked={booking_payment === "mastercard"} onChange={(e) => setbooking_payment(e.target.value)}/> Master Card
//       </label>

//       <img src={masterCard} alt="" />
//     </div>

//     <div className="payment mt-3 d-flex align-items-center justify-content-between">
//       <label htmlFor="" className="d-flex align-items-center gap-2">
//         <input type="radio" value="paypal" checked={booking_payment === "paypal"} onChange={(e) => setbooking_payment(e.target.value)}/> Paypal
//       </label>

//       <img src={paypal} alt="" />
//     </div>
//     <div className="payment text-end mt-5">
//       <button onClick={onSubmit}>Reserve Now</button>
//     </div>
//     </>
//   );
// };

// export default PaymentMethod;
