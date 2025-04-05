import AOS from "aos";
import { useEffect } from "react";

export default function AOSWrapper({
  children,
  animation = "fade-up",
  duration = 700,
  delay = 0,
}) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-once="false"
    >
      {children}
    </div>
  );
}
