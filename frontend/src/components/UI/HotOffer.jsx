import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";



const HotOffer = (props) => {
    const { imgUrl } = props.item;
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
    <div className="car__item">
      <div className="car__img">
        <img src={ imgUrl } alt="" className="w-100" />
      </div>
    </div>
    </Col>
    
  );
};

export default HotOffer