"use client";
import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import { navData, socialLinks } from "@/data/appData";
import { useRouter } from "next/navigation";
import TypingAnimation from "../TypingAnimation";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.header}>
          {/* <div className={classes.logoDiv}>
          <Image src={"/images/appImages/car.png"} fill alt="logo" />
        </div> */}
          <h1 className={classes.title}>Magnus</h1>
        </div>
        <div className={classes.body}>
          <div className={classes.navItems}>
            {navData?.map((item) => (
              <h5
                key={item?.route}
                className={classes.nav}
                onClick={() => router?.push(item?.route)}
              >
                {item?.label}
              </h5>
            ))}
          </div>
          <div className={classes.socialLinkDiv}>
            {socialLinks?.map((item) => (
              <h5 key={item?.route} onClick={() => router?.push(item?.route)}>
                {item?.label}
              </h5>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.bottomFooter}>
        <p>
          © {new Date().getFullYear()} Design and Developed by Mukadus Jawaid.
          All rights reserved.
        </p>
      </div>
    </>
  );
}
