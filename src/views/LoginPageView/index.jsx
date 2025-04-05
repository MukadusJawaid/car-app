"use client";

import { useRouter } from "next/navigation";
import classes from "./LoginPageView.module.css";
import useIsMobile from "../../components/MobileHook";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import TypingAnimation from "../../components/TypingAnimation";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function LoginPageView() {
  const router = useRouter();

  const isMobile = useIsMobile(765);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <main className={classes.mainDiv}>
        <div className={classes.subMainDiv}>
          <Container>
            <div className={classes.subDiv}>
              <Row>
                <Col md={isMobile ? 0 : 6}>
                  <div className={classes.leftColumn}>
                    <Row className="h-100">
                      <Col md={12}>
                        <div className={classes.imageDiv}>
                          <Image
                            src={"/images/appImages/authImage.jpg"}
                            fill
                            alt="SignUpImage"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className={
                      isMobile
                        ? classes.rightConditionalCol
                        : classes.rightColumn
                    }
                  >
                    <Row className={isMobile ? "gy-2" : "gy-3"}>
                      <Col md={12} style={{ paddingInlineStart: "10px" }}>
                        <div className={classes.headings}>
                          <h1>Login</h1>
                          {!isMobile && (
                            <h6>
                              <TypingAnimation
                                strings={["Don't have an account?"]}
                                speed={70}
                                loop={false}
                              />
                              <span
                                style={{ fontWeight: "600", cursor: "pointer" }}
                                onClick={() => router?.push("/signup")}
                              >
                                {""} Signup
                              </span>
                            </h6>
                          )}
                        </div>
                      </Col>

                      <Col md={12} className={isMobile ? "mt-2" : ""}>
                        <Input
                          placeholder="enter email"
                          setter={(val) => handleChange("email", val)}
                          value={formData?.email}
                          label={"Email"}
                        />
                      </Col>

                      <Col md={12}>
                        <Input
                          type={"password"}
                          placeholder="enter password"
                          setter={(val) => handleChange("password", val)}
                          value={formData?.password}
                          label={"Password"}
                        />
                      </Col>

                      <Col md={12}>
                        <Button
                          label="Login"
                          variant={"primary"}
                          className={classes.button}
                        />
                      </Col>
                      {isMobile && (
                        <Col md={12}>
                          <div className={classes.headings}>
                            <h6>
                              <TypingAnimation
                                strings={["Don't have an account?"]}
                                speed={70}
                                loop={false}
                              />
                              <span
                                style={{ fontWeight: "600", cursor: "pointer" }}
                                onClick={() => router?.push("/signup")}
                              >
                                {""} Signup
                              </span>
                            </h6>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
