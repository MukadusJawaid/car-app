import React from "react";
import classes from "./BlogsDetailPageView.module.css";
import { BLOGS_DATA } from "@/data/mockData";
import HeroSection from "@/components/HeroSection";
import { generateSlug } from "@/data/helper";
import { Col, Container, Row } from "react-bootstrap";

export default function BlogsDetailPageView({ slug }) {
  const blogData = BLOGS_DATA?.find((e) => generateSlug(e?.title) === slug);

  return (
    <main>
      <HeroSection image={blogData?.image} title={blogData?.title} />
      <Container>
        <Row>
          <Col md={12}></Col>
        </Row>
      </Container>
    </main>
  );
}
