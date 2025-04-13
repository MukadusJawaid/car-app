"use client";

import EmblaCarousel from "@/components/Carousel";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import QuesAnsCard from "@/components/QuesAnsCard";
import { carFacts } from "@/data/mockData";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./QuestionAnswerPageView.module.css";
import Image from "next/image";

export default function QuestionAnswerPageView() {
  return (
    <div className={classes.maindIV}>
      <HeroSection
        title={"Car Knowledge Q&A"}
        image={"/images/dummyImages/ques-bg.jpg"}
        stringArray={["Test Your Auto IQ", "Explore Cool Car Facts"]}
      />
      <Container>
        <Row>
          <Col md={12}>
            <Heading heading={"Fuel Your Brain"} />
          </Col>
          <Col md={12}>
            <div className={classes.questionSection}>
              <div className={classes.iconMainDiv}>
                <Image
                  src={"/images/appImages/education.png"}
                  fill
                  alt="icon"
                />
              </div>
              <EmblaCarousel>
                {carFacts?.map((item, index) => (
                  <div className="embla__slide" key={index}>
                    <QuesAnsCard data={item} key={index} />
                  </div>
                ))}
              </EmblaCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
