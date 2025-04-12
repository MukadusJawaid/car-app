import React from "react";
import classes from "./HeroSection.module.css";
import TypingAnimation from "../TypingAnimation";
import Image from "next/image";

export default function HeroSection({ title, stringArray }) {
  return (
    <div className={classes.imageDiv}>
      <Image fill alt="bg" src={"/images/appImages/landingPageBg.jpg"} />
      <div className={classes.overLay}>
        <div className={classes.textDiv}>
          <h1>{title}</h1>
          {stringArray && (
            <span className="h2">
              <TypingAnimation
                loop={false}
                speed={70}
                backSpeed={70}
                strings={stringArray}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
