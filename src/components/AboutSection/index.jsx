import React from "react";
import classes from "./AboutSection.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function AboutSection({ description }) {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={6} className="mt-2">
          <div className={classes.aboutImageDiv}>
            <Image
              src="/images/dummyImages/about-image.jpg"
              alt="about-image"
              fill
            />
          </div>
        </Col>
        <Col sm={12} md={6} className="mt-2">
          <p className={classes.aboutDescription}>{description}</p>
        </Col>
      </Row>
    </Container>
  );
}
