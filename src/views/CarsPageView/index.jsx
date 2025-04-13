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
        image={"/images/appImages/landingPageBg.jpg"}
        title={"Future on Wheels"}
        stringArray={["Bold Design", "Smarter Drive."]}
      />

      <Container>
        <Row>
          <Col md={12}>
            <Heading heading={"Fierce Innovation."} />
          </Col>

          <Col md={12}>
            <Row className="gy-3">
              {CAR_CARD_DATA?.map((item, index, element) => (
                <Col
                  xs={12}
                  sm={element?.length - 1 === index ? 12 : 6}
                  md={element?.length - 1 === index ? 12 : 6}
                  lg={element?.length - 1 === index ? 12 : 6}
                  xl={6}
                  key={index}
                >
                  <AOSWrapper delay={index * 100}>
                    <CarCard
                      data={item}
                      imageDiv={
                        element?.length - 1 === index && classes.cardImage
                      }
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
