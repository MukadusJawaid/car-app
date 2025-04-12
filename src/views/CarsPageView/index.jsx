"use client";
import React from "react";
import classes from "./CarsPageView.module.css";
import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "@/components/HeroSection";
import { CAR_CARD_DATA } from "@/data/mockData";
import AOSWrapper from "@/components/ComponentAnimation";
import CarCard from "@/components/CarCard";
import { generateSlug } from "@/data/helper";
import { useRouter } from "next/navigation";
import Heading from "@/components/Heading";

export default function CarsPageView() {
  const router = useRouter();
  return (
    <div className={classes.mainDiv}>
      <HeroSection
        title={"Drive Into the Latest Car Models"}
        stringArray={["Latest Cars", "Automotive Innovations"]}
      />
      <Container>
        <Row>
          <Col md={12}>
            <Col md={12}>
              <Heading heading={"Latest in Luxury and Innovation"} />
            </Col>
          </Col>
          <Col md={12}>
            <Row className="gy-3">
              {CAR_CARD_DATA?.map((item, index, element) => (
                <Col
                  sm={12}
                  md={element.length - 1 === index ? 12 : 6}
                  lg={6}
                  xl={6}
                  key={index}
                >
                  <AOSWrapper delay={index * 100}>
                    <CarCard
                      data={item}
                      onClick={() =>
                        router?.push(`/cars/${generateSlug(item?.title)}`)
                      }
                    />
                  </AOSWrapper>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
