import React from "react";
import classes from "./FeatureCard.module.css";
import Image from "next/image";

export default function FeatureCard({ data }) {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.subDiv}>
        <div className={classes.imageDiv}>
          <Image src={data?.image} fill alt="featureIcon" />
        </div>
      </div>
      <h6>{data?.title}</h6>
    </div>
  );
}
