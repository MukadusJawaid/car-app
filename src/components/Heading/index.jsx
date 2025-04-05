import React from "react";
import classes from "./Heading.module.css";

export default function Heading({ heading }) {
  return (
    <div className={classes.titleDiv}>
      <h1>{heading}</h1>
    </div>
  );
}
