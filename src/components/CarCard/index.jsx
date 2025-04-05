import React from "react";
import classes from "./CarCard.module.css";
import Image from "next/image";

export default function CarCard({ data, onClick }) {
  return (
    <div className={classes.mainDiv} onClick={onClick}>
      <div className={classes.imageDiv}>
        <Image src={data?.image} fill alt="carImage" />
      </div>
      <div className={classes.body}>
        <h5>{data?.title}</h5>
        <span className="maxLine3">{data?.description}</span>
      </div>
    </div>
  );
}
