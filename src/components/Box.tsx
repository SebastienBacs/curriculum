import { ReactNode } from 'react';

export default function Box({ children, borders = true, variant, noGap = false, padding, className }: Prop) {
  const boxClass = 'relative w-full h-ful rounded-lg flex flex-col';
  const borderClass = borders ? 'border border-black-300' : '';
  const backgroundClass = variant ? variant : 'bg-black-200';
  const paddingClass = padding ? padding : 'sm:p-7 p-4';
  const gapClass = noGap ? '' : 'gap-5';

  return (
    <section className={`${boxClass} ${backgroundClass} ${borderClass} ${paddingClass} ${gapClass} ${className}`}>
      {children}
    </section>
  );
}

type Prop = {
  children: ReactNode;
  borders?: boolean;
  variant?: string;
  noGap?: boolean;
  padding?: string;
  className?: string;
};
