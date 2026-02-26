import { ReactNode } from 'react';

const SIZES = {
  p: 'text-md',
  span: 'text-sm',
  h1: '!leading-normal text-3xl md:text-5xl',
  h2: '!leading-normal text-2xl md:text-4xl',
  h3: '!leading-normal text-xl md:text-3xl',
  h4: '!leading-normal text-lg md:text-2xl',
  h5: '!leading-normal text-md md:text-xl',
  h6: '!leading-normal text-sm md:text-lg',
};

const WEIGHTS = {
  bold: 'font-bold',
  semibold: 'font-semibold',
  medium: 'font-medium',
  normal: 'font-normal',
  light: 'font-light',
};

export default function Text({ children, color, weight = 'normal', extraClass = '', Type = 'p' }: Prop) {
  const textColor = color ?? 'text-white';
  const textSize = SIZES[Type];
  const textWeight = WEIGHTS[weight];

  return <Type className={`font-generalsans ${textColor} ${textSize} ${textWeight} ${extraClass}`}>{children}</Type>;
}

type Prop = {
  children: ReactNode;
  color?: string;
  weight?: 'bold' | 'semibold' | 'medium' | 'normal' | 'light';
  extraClass?: string;
  Type?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
