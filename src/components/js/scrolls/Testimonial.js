import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img_photo from "../../../media/img_photo.png";
import img_photo_2 from "../../../media/img_photo_2.png";
import Rate from "../../../media/Rate.png";

const Testimonial = () => {
  return (
    <>
      <Container fluid className="p-0 testimonial-section" id="testimonial">
        {/* <div
          style={{ backgroundColor: "#eee", height: "500px", width: "500px" }}
        ></div> */}
        <div className="title-testimonial text-center">
          <h2 className="fw-semibold">Testimonial</h2>
          <p className="fw-semibold">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <Row className="justify-content-center testimonial-row">
          <Col
            lg="3"
            className="d-flex testimonial-1 py-1 px-3 align-items-center rounded-3"
          >
            <Col lg="4" className="ps-4">
              <img src={img_photo_2} alt="" />
            </Col>
            <Col lg="8">
              <img src={Rate} alt="" />
              <p className="mt-2 fw-semibold">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                suscipit numquam aliquam commodi facilis! Nobis deserunt rerum
                accusamus voluptates iusto."
              </p>
              <p>Angel 32, Bromo</p>
            </Col>
          </Col>
          <Col
            lg="3"
            className="d-flex testimonial-2 align-items-center py-5 px-5 rounded-3"
          >
            <Col lg="4" className="ps-1">
              <img src={img_photo} alt="" />
            </Col>
            <Col lg="8" className="content-testi">
              <img className="img-rate" src={Rate} alt="" />
              <p className="mt-2 fw-semibold">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti quibusdam atque ipsum officiis molestiae enim nobis
                fugit libero non voluptatibus."
              </p>
              <p>John Dee 32, Bromo</p>
            </Col>
          </Col>
          <Col
            lg="3"
            className="d-flex testimonial-3 align-items-center py-3 px-3 rounded-3"
          >
            <Col lg="4" className="ps-4">
              <img src={img_photo_2} alt="" />
            </Col>
            <Col lg="8">
              <img src={Rate} alt="" />
              <p className="mt-2 fw-semibold">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti quibusdam atque ipsum officiis molestiae enim nobis
                fugit libero non voluptatibus."
              </p>
              <p>Citra 32, Bromo</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;