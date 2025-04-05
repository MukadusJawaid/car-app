import React from "react";
import classes from "./BlogCard.module.css";
import Image from "next/image";

export default function BlogCard({ data }) {
  return (
    <div className={classes.blogDiv}>
      <div className={classes.imageDiv}>
        <Image src={data?.image} fill alt={""} />
      </div>
      <div className={classes.blogDetailDiv}>
        <h5>{data?.title}</h5>
        <p>{data?.date}</p>
        <span className="maxLine3">{data?.shortDesc}</span>
      </div>
    </div>
  );
}
