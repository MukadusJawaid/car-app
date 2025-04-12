"use client";
import classes from "./LandingPageView.module.css";

import AboutSection from "@/components/AboutSection";
import BlogCard from "@/components/BlogCard";
import CarCard from "@/components/CarCard";
import AOSWrapper from "@/components/ComponentAnimation";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import { generateSlug } from "@/data/helper";
import { BLOGS_DATA, CAR_CARD_DATA, CAR_FEATURES_DATA } from "@/data/mockData";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/Button";

export default function LandingPageView() {
  const router = useRouter();

  return (
    <main className={classes.mainDiv}>
      <HeroSection
        title={"Caropedia"}
        stringArray={["Learn. Compare. Decide.", "Facts. Insights. Answers."]}
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

          <Col md={12} className="mt-3">
            <AOSWrapper duration={1000}>
              <Button
                variant={"primary"}
                label="View More"
                onClick={() => router?.push("/cars")}
              />
            </AOSWrapper>
          </Col>

          <Col md={12}>
            <AOSWrapper duration={600}>
              <Heading heading={"Blogs"} />
            </AOSWrapper>
          </Col>
          <Col md={12}>
            <Row className="gy-3">
              {BLOGS_DATA?.slice(0, 3)?.map((item, index) => (
                <Col lg={index === 2 ? { span: 6, offset: 3 } : 6} key={index}>
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
          <Col md={12} className="mt-3">
            <AOSWrapper duration={1000}>
              <Button
                variant={"primary-outline"}
                label="Explore More"
                onClick={() => router?.push("/cars")}
              />
            </AOSWrapper>
          </Col>
          <Col md={12}>
            <AOSWrapper duration={600}>
              <Heading heading={"About Us"} />
            </AOSWrapper>
          </Col>
          <Col md={12} className="p-0">
            <AOSWrapper>
              <AboutSection
                description={` Caropedia is a hub for automotive knowledge, innovation, and
            technology. Covering everything from classic automobiles to the
            latest advancements in electric and autonomous vehicles, Caropedia
            serves as a comprehensive resource for car enthusiasts, engineers,
            and industry professionals alike. Our platform provides in-depth
            insights into automotive history, engineering breakthroughs,
            performance trends, and future technologies shaping the industry.
            Whether it's the evolution of internal combustion engines, the rise
            of electric mobility, or the impact of AI in self-driving cars,
            Caropedia delivers well-researched content designed to inform and
            educate. With a commitment to accuracy and detailed analysis, Caropedia
            is your go-to destination for all things automotive.`}
              />
            </AOSWrapper>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
