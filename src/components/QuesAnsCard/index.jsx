"use client";

import React, { useState } from "react";
import classes from "./QuesAnsCard.module.css";
import Image from "next/image";
import Button from "../Button";

export default function QuesAnsCard({ data }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className={classes.flipCard}>
      <div className={`${classes.flipInner} ${flipped ? classes.flipped : ""}`}>
        {!flipped && (
          <div className={classes.flipFront}>
            <div className={classes.iconDiv}>
              <Image src={"/images/appImages/car-image.jpg"} alt="icon" fill />
            </div>

            <div className={classes.rightColumn}>
              <h4>{data?.question}</h4>
              <Button
                label={"View Answer"}
                variant={"secondary"}
                onClick={handleFlip}
                className={classes.button}
              />
            </div>
          </div>
        )}

        {/* Back Side */}
        {flipped && (
          <div className={classes.flipBack}>
            <div className={classes.answer}>
              <h4>{data?.answer}</h4>
              <Button
                label={"Back to Question"}
                variant={"secondary"}
                onClick={handleFlip}
                className={classes.button}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
