import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
  FirstButton,
} from "./Arrowbuttons";
import React from "react";

const EmblaCarousel = ({ children, options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    ...options,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
    onFirstButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla embla--vertical">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>

      {/* Put controls outside the viewport */}
      <div className="embla__controls">
        <FirstButton onClick={onFirstButtonClick} disabled={prevBtnDisabled} />
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
