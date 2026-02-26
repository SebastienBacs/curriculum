import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ slides }: Prop) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-7xl mx-auto px-3 md:px-0">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] lg:flex-[0_0_50%] px-3">
              <div className="h-full flex">
                <div className="flex-1">{slide}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="previous review"
        onClick={scrollPrev}
        className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white-600 w-5 h-5 rounded-full text-black-300 flex items-center justify-center">
        <FontAwesomeIcon icon={faCaretLeft} className="h-3.5 w-3.5" />
      </button>

      <button
        aria-label="next review"
        onClick={scrollNext}
        className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white-600 w-5 h-5 rounded-full text-black-300 flex items-center justify-center">
        <FontAwesomeIcon icon={faCaretRight} className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

type Prop = {
  slides: JSX.Element[];
};
