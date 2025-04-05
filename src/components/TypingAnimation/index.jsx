import React from "react";
import PropTypes from "prop-types";
import { ReactTyped, Typed } from "react-typed";

export default function TypingAnimation({
  speed,
  loop,
  strings,
  backSpeed,
  cursorChar,
  className,
}) {
  return (
    <ReactTyped
      className={className}
      strings={strings}
      typeSpeed={speed}
      loop={loop}
      backSpeed={backSpeed}
      cursorChar={loop ? cursorChar || "|" : ""}
    />
  );
}

TypingAnimation.propTypes = {
  speed: PropTypes.number.isRequired,
  loop: PropTypes?.bool.isRequired,
  strings: PropTypes.array.isRequired,
  backSpeed: PropTypes.number,
  cursorChar: PropTypes.string,
};
