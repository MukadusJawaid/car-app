import { useState, useEffect } from "react";

function useIsMobile(breakpoint) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= breakpoint);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= breakpoint);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;
