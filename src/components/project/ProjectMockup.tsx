const ROTATION_CLASS = ['[transform:rotateY(0deg)]', '[transform:rotateY(180deg)]'];

export default function ProjectMockup({ source, order, display }: Prop) {
  const extraClass = ROTATION_CLASS[order % 2];
  const diplayClass = display ? 'z-50' : 'z-10';

  return (
    <div
      className={`absolute inset-0 transition-all duration-500 h-full flex items-center justify-center [backface-visibility:hidden] ${extraClass} ${diplayClass}`}>
      <img
        src="/assets/project/opt_mockup.webp"
        aria-hidden="true"
        loading="lazy"
        className="hidden sm:block relative z-20 h-auto md:h-full lg:h-auto"
      />

      <div className="absolute z-10 top-0 sm:top-4 md:top-0 h-full w-full sm:w-[93%] md:w-[455px] lg:w-[93%] sm:h-[67%] lg:h-full sm:px-5 md:pt-10 lg:pt-5 lg:pb-[27%] flex items-center justify-center">
        {display && (
          <video
            key={source}
            className="w-full h-full"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata">
            <source src={source} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

type Prop = {
  source: string;
  order: number;
  display: boolean;
};
