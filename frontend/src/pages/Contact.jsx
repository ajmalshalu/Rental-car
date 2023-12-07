import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import API from '../API';
import "../styles/contact.css";
import Swal from 'sweetalert2';
import Header from "../components/Header/Header";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [c_name, setName] = useState("");
  const [c_email, setEmail] = useState("");
  const [c_phno, setPhno] = useState("");
  const [c_message, setMessage] = useState("");
  const [rental, setRental] = useState([]);

  useEffect(() => {
    refreshContact();

  }, []);


  const refreshContact = () => {
    API.get("/")
      .then((res) => {
        setName("");
        setEmail("");
        setPhno("");
        setMessage("");
      })
      .catch(console.error);

    }; 

    function popup(){
      Swal.fire({
        position: 'top-center',
        title: 'Saved succesfully',
        text: '',
        icon: 'success',
        confirmButtonText: false,
        timer:2900
      })
    }

    const onSubmit = (e) => {
      e.preventDefault();
      let item = { c_name, c_email, c_phno, c_message };
      API.post("/contact/", item).then(() => popup(), refreshContact());
    };
    return (
      <Helmet title="Contact">
        <Header />
        <CommonSection title="Contact" />
        <section>
          <Container>
            <Row>
              <Col lg="7" md="7">
                <h6 className="fw-bold mb-4">Get In Touch</h6>

                <Form>
                  <FormGroup className="contact__form">
                    <Input placeholder="Your Name" type="text" value={c_name} onChange={(e) => setName(e.target.value)} />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input placeholder="Email" type="email" value={c_email} onChange={(e) => setEmail(e.target.value)} />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <Input placeholder="Phno" type="phno" value={c_phno} onChange={(e) => setPhno(e.target.value)} />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <textarea
                      rows="5"
                      placeholder="Message"
                      className="textarea"
                      value={c_message} onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </FormGroup>

                  <button className=" contact__btn" type="submit" onClick={onSubmit}>
                    Send Message
                  </button>
                </Form>
              </Col>

              <Col lg="5" md="5">
                <div className="contact__info">
                  <h6 className="fw-bold">Contact Information</h6>
                  <p className="section__description mb-0">
                    Kalamassery, Kochi, Kerala
                  </p>
                  <div className=" d-flex align-items-center gap-2">
                    <h6 className="fs-6 mb-0">Phone:</h6>
                    <p className="section__description mb-0">+91 8589899471</p>
                  </div>

                  <div className=" d-flex align-items-center gap-2">
                    <h6 className="mb-0 fs-6">Email:</h6>
                    <p className="section__description mb-0">royalcars@gmail.com</p>
                  </div>

                  <h6 className="fw-bold mt-4">Follow Us</h6>

                  <div className=" d-flex align-items-center gap-4 mt-3">
                    {socialLinks.map((item, index) => (
                      <Link
                        to={item.url}
                        key={index}
                        className="social__link-icon"
                      >
                        <i class={item.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  };
export default Contact;
