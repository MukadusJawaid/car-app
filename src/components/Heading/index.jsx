import React from "react";
import classes from "./Heading.module.css";
import clsx from "clsx";

export default function Heading({ heading, titleDiv }) {
  return (
    <div className={clsx(classes.titleDiv, titleDiv)}>
      <h2>{heading}</h2>
    </div>
  );
}
