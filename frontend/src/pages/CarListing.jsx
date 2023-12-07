import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import Header from "../components/Header/Header";


const CarListing = () => {
  return (
    <Helmet title="Cars">
      <Header />
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div><ul/>
            </Col>

            <h1 className="text-center gap-1">Exotic Cars</h1><ul /><br />
            {carData.map((item) => (
              item.carModel === "Exotic" &&
              <CarItem item={item} key={item.id} />
            ))}
            <h1 className="text-center gap-1">Premium SUV</h1><ul /><br />
            {carData.map((item) => (
              item.carModel === "Premium Suv" &&
              <CarItem item={item} key={item.id} />
            ))}
            <h1 className="text-center gap-1">Premium Sedan</h1><ul /><br />
            {carData.map((item) => (
              item.carModel === "Premium sedan" &&
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
