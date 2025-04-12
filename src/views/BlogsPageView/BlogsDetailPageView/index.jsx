import React from "react";
import classes from "./BlogsDetailPageView.module.css";
import { BLOGS_DATA } from "@/data/mockData";
import HeroSection from "@/components/HeroSection";
import { generateSlug } from "@/data/helper";
import { Col, Container, Row } from "react-bootstrap";
import parse from "html-react-parser";
import Heading from "@/components/Heading";

export default function BlogsDetailPageView({ slug }) {
  const blogData = BLOGS_DATA?.find((e) => generateSlug(e?.title) === slug);

  return (
    <main>
      <HeroSection image={blogData?.image} title={blogData?.title} />
      <Container>
        <Row>
          <Col md={12}>
            <Heading titleDiv={classes.headingDiv} heading={"Blog Insight"} />
          </Col>
          <Col md={12}>
            <p>{blogData?.description && parse(blogData?.description)}</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
