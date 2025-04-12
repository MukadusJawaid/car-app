"use client";
import React from "react";
import classes from "./BlogsPageView.module.css";
import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "@/components/HeroSection";
import { BLOGS_DATA } from "@/data/mockData";
import { generateSlug } from "@/data/helper";
import AOSWrapper from "@/components/ComponentAnimation";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import Heading from "@/components/Heading";

export default function BlogsPageView() {
  const router = useRouter();

  return (
    <main className={classes.mainDiv}>
      <HeroSection
        image={"/images/appImages/landingPageBg.jpg"}
        title={"Fuel Your Curiosity"}
        stringArray={["Auto Stories.", "Future Machines."]}
      />
      <Container>
        <Row>
          <Col md={12}>
            <Heading heading={"Buckle Up for Fresh Car Content"} />
          </Col>
          <Col md={12}>
            <Row className="gy-3">
              {BLOGS_DATA?.map((item, index, element) => (
                <Col
                  md={12}
                  lg={element.length - 1 === index ? 12 : 6}
                  key={index}
                >
                  <AOSWrapper delay={index * 100}>
                    <BlogCard
                      data={item}
                      onClick={() =>
                        router?.push(`/blogs/${generateSlug(item?.title)}`)
                      }
                    />
                  </AOSWrapper>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
