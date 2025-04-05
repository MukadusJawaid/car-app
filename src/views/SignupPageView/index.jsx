"use client";

import { useRouter } from "next/navigation";
import useIsMobile from "../../components/MobileHook";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import TypingAnimation from "../../components/TypingAnimation";
import Input from "../../components/Input";
import Button from "../../components/Button";
import classes from "./SignupPageView.module.css";

export default function SignUpPageView() {
  const router = useRouter();

  const isMobile = useIsMobile(765);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: null,
    password: "",
    confirmPassword: "",
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
                          <h1>Registration</h1>
                          {!isMobile && (
                            <h6>
                              <TypingAnimation
                                strings={["Already have an account?"]}
                                speed={70}
                                loop={false}
                              />
                              <span
                                style={{ fontWeight: "700", cursor: "pointer" }}
                                onClick={() => router?.push("/login")}
                              >
                                {" "}
                                Login
                              </span>
                            </h6>
                          )}
                        </div>
                      </Col>
                      <Col md={12}>
                        <Input
                          setter={(val) => handleChange("name", val)}
                          value={formData?.name}
                          label={"FullName"}
                          placeholder="enter full name"
                        />
                      </Col>
                      <Col md={12}>
                        <Input
                          setter={(val) => handleChange("email", val)}
                          value={formData?.email}
                          label={"Email"}
                          placeholder="enter email"
                        />
                      </Col>
                      <Col md={12}>
                        <Input
                          setter={(val) => handleChange("phone", val)}
                          value={formData?.phone}
                          label={"Phone Number"}
                          placeholder="enter phone number"
                        />
                      </Col>
                      <Col md={12}>
                        <Input
                          type={"password"}
                          setter={(val) => handleChange("password", val)}
                          value={formData?.password}
                          label={"Password"}
                          placeholder="enter password"
                        />
                      </Col>
                      <Col md={12}>
                        <Input
                          type={"password"}
                          setter={(val) => handleChange("confirmPassword", val)}
                          value={formData?.confirmPassword}
                          label={"Confirm Password"}
                          placeholder="re-type password"
                        />
                      </Col>
                      <Col md={12}>
                        <Button
                          label="Submit"
                          variant={"primary"}
                          className={classes.button}
                        />
                      </Col>
                      {isMobile && (
                        <Col md={12}>
                          <div className={classes.headings}>
                            <h6>
                              <TypingAnimation
                                strings={["Already have an account?"]}
                                speed={70}
                                loop={false}
                              />
                              <span
                                style={{ fontWeight: "700", cursor: "pointer" }}
                                onClick={() => router?.push("/login")}
                              >
                                {" "}
                                Login
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
