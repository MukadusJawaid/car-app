import { ReactTyped } from "react-typed";

export default function TypingAnimation({
  speed,
  loop,
  strings,
  backSpeed,
  cursorChar,
  className,
}) {
  return (
    <div
      style={{
        minHeight: "fit-content",
        display: "inline-block",
      }}
    >
      <ReactTyped
        className={className}
        strings={strings}
        typeSpeed={speed}
        loop={loop}
        backSpeed={backSpeed}
        cursorChar={loop ? cursorChar || "|" : ""}
      />
    </div>
  );
}
