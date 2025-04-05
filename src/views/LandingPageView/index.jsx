"use client";
import classes from "./LandingPageView.module.css";

import BlogCard from "@/components/BlogCard";
import CarCard from "@/components/CarCard";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import { BLOGS_DATA, CAR_CARD_DATA, CAR_FEATURES_DATA } from "@/data/mockData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/Button";
import Heading from "@/components/Heading";
import AboutSection from "@/components/AboutSection";

export default function LandingPageView() {
  const router = useRouter();

  return (
    <main className={classes.mainDiv}>
      <HeroSection
        title={"Magnus"}
        stringArray={["Great in Design", " Great in Performance"]}
      />
      <Container>
        <Row>
          <Col md={12}>
            <Row>
              {CAR_FEATURES_DATA?.map((e, index) => (
                <Col xs={4} md={4} key={index}>
                  <FeatureCard data={e} />
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={12}>
            <Heading heading={"About Cars"} />
          </Col>

          <Col md={12}>
            <Row className="g-3">
              {CAR_CARD_DATA?.slice(0, 3)?.map((item, index, element) => (
                <Col
                  sm={12}
                  md={element.length - 1 === index ? 12 : 6}
                  lg={4}
                  xl={4}
                  key={index}
                >
                  <CarCard data={item} onClick={() => router?.push("/cars")} />
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={12} className="mt-3">
            <Button
              variant={"primary"}
              label="View More"
              onClick={() => router?.push("/cars")}
            />
          </Col>

          <Col md={12}>
            <Heading heading={"Blogs"} />
          </Col>
          <Col md={12}>
            <Row className="gy-3">
              {BLOGS_DATA?.slice(0, 3)?.map((item, index) => (
                <Col lg={index === 2 ? { span: 6, offset: 3 } : 6} key={index}>
                  <BlogCard data={item} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={12} className="mt-3">
            <Button
              variant={"primary-outline"}
              label="Explore More"
              onClick={() => router?.push("/cars")}
            />
          </Col>
          <Col md={12}>
            <Heading heading={"About Us"} />
          </Col>
          <Col md={12} className="p-0">
            <AboutSection
              description={` Magnus is a hub for automotive knowledge, innovation, and
            technology. Covering everything from classic automobiles to the
            latest advancements in electric and autonomous vehicles, Magnus
            serves as a comprehensive resource for car enthusiasts, engineers,
            and industry professionals alike. Our platform provides in-depth
            insights into automotive history, engineering breakthroughs,
            performance trends, and future technologies shaping the industry.
            Whether it's the evolution of internal combustion engines, the rise
            of electric mobility, or the impact of AI in self-driving cars,
            Magnus delivers well-researched content designed to inform and
            educate. With a commitment to accuracy and detailed analysis, Magnus
            is your go-to destination for all things automotive.`}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
