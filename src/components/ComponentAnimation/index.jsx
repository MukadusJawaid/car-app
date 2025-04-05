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

    setTimeout(() => {
      AOS.refresh();
    }, 500);

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-once="true"
    >
      {children}
    </div>
  );
}
