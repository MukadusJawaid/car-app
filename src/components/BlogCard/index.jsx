import React from "react";
import classes from "./BlogCard.module.css";
import Image from "next/image";
import Button from "../Button";
import { SiReadme } from "react-icons/si";

export default function BlogCard({ data, onClick }) {
  return (
    <div className={classes.blogDiv}>
      <div className={classes.imageDiv}>
        <Image src={data?.image} fill alt={""} />
      </div>
      <div className={classes.blogDetailDiv}>
        <h5>{data?.title}</h5>
        <p>{data?.date}</p>
        <span className="maxLine3">{data?.shortDesc}</span>
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
