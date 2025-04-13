import React from "react";
import classes from "./CarCard.module.css";
import Image from "next/image";
import clsx from "clsx";

export default function CarCard({ data, onClick, imageDiv }) {
  return (
    <div className={classes.mainDiv} onClick={onClick}>
      <div className={classes.imagesSection}>
        <div className={classes.overLay} />
        <div className={clsx(imageDiv, classes.imageDiv)}>
          <Image src={data?.image} fill alt="carImage" />
        </div>
      </div>

      <div className={classes.body}>
        <h5 className="maxLine1">{data?.title}</h5>
        <span className="maxLine3">{data?.shortDescription}</span>
      </div>
    </div>
  );
}
