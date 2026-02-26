const cornerClass = {
  'top-left': 'rotate-180',
  'top-right': '-rotate-90',
  'bottom-left': 'rotate-90',
  'bottom-right': 'rotate-0',
};

export default function Corner({ side, className }: Prop) {
  return (
    <img
      className={`absolute pointer-events-none select-none ${cornerClass[side]} ${className}`}
      src="/assets/corner.svg"
      aria-hidden="true"
    />
  );
}

type Prop = {
  side: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className: string;
};
