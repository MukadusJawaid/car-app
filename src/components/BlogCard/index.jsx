import React from "react";
import classes from "./BlogCard.module.css";
import Image from "next/image";
import Button from "../Button";
import { SiReadme } from "react-icons/si";

export default function BlogCard({ data, onClick }) {
  return (
    <div className={classes.blogDiv}>
      <div className={classes.blogSection}>
        <div className={classes.overLay} />
        <div className={classes.imageDiv}>
          <Image src={data?.image} fill alt={"blog-image"} />
        </div>
      </div>
      <div className={classes.blogDetailDiv}>
        <div className={classes.blogDataDiv}>
          <h5 className="maxLine2">{data?.title}</h5>
          <p>{data?.date}</p>
          <span className="maxLine3">{data?.shortDesc}</span>
        </div>
        <Button
          className={classes.btn}
          variant={"primary"}
          label={<SiReadme />}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
