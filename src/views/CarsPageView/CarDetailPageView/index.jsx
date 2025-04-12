"use client";
import React from "react";
import classes from "./CarDetailPageView.module.css";
import HeroSection from "@/components/HeroSection";
import { CAR_CARD_DATA } from "@/data/mockData";
import { generateSlug } from "@/data/helper";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "@/components/Heading";
import parse from "html-react-parser";

export default function CarDetailPage({ slug }) {
  const carData = CAR_CARD_DATA?.find((e) => generateSlug(e?.title) === slug);

  return (
    <div className={classes.mainDiv}>
      <HeroSection image={carData?.image} title={carData?.title} />
      <Container>
        <Row>
          <Col md={12}>
            <Heading heading={"Model Summary"} />
          </Col>
          <Col md={12}>
            <p>{carData?.description && parse(carData?.description)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
