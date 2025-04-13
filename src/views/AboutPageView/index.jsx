"use client";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import { about_me } from "@/data/mockData";
import parse from "html-react-parser";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutPageView() {
  const stringArray = [
    "Innovation Through Passion",
    "Building Dreams, One Line at a Time",
  ];

  return (
    <div>
      <HeroSection
        title={"About Me"}
        image={"/images/dummyImages/about-image.jpg"}
        stringArray={stringArray}
      />
      <Container>
        <Row>
          <Col md={12}>
            <Heading heading={"Crafting Ideas Through Code"} />
            <div>{parse(about_me)}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
