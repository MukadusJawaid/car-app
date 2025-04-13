"use client";
import React, { useState } from "react";
import classes from "./CarCard.module.css";
import Image from "next/image";
import clsx from "clsx";
import Button from "../Button";

export default function CarCard({ data, onClick, imageDiv }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={classes.mainDiv}
      // onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={classes.imagesSection}>
        <div className={classes.overLay} />
        <div className={clsx(imageDiv, classes.imageDiv)}>
          <Image src={data?.image} fill alt="carImage" />
        </div>
      </div>
      {hovered && (
        <div className={classes.centerWrapper}>
          <Button
            label={`View ${data?.title}`}
            variant={"secondary"}
            className={classes.viewButton}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          />
        </div>
      )}
      <div className={classes.body}>
        <h5 className="maxLine1">{data?.title}</h5>
        <span className="maxLine3">{data?.shortDescription}</span>
      </div>{" "}
    </div>
  );
}
