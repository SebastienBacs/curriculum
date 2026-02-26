import { ReactNode } from 'react';

const SHAPE = {
  circle: 'rounded-full',
  hexagon: 'clip-hex',
  triangle: 'clip-triangle',
  octogon:
    'after:content-[""] after:absolute after:left-0 after:w-full after:border-t-[20px] after:border-x-[20px] after:border-x-transparent before:content-[""] before:absolute before:left-0 before:w-full before:-top-[5px] before:border-b-[20px] before:border-x-[20px] before:border-x-transparent',
};

export default function Shape({ type, size, children, active, action, extraClass, borderWidth }: Props) {
  const generateStyling = (): StylingObject => {
    const result: StylingObject = {};

    if (size) {
      result.height = size + 'px';
      result.width = size + 'px';
    }

    return result;
  };

  return (
    <div
      className={`relative w-full h-full drop-shadow-lg ${extraClass ?? ''} ${action ? 'cursor-pointer' : ''} ${active ? 'active' : ''}`}
      style={generateStyling()}
      onClick={action}>
      <div
        className={`${borderWidth} w-full h-full bg-background after:border-t-background after:-bottom-[5px] before:border-b-background before:-top-[5px] after:z-10 before:z-10  ${SHAPE[type]}`}>
        <div
          className={`duration-300 transition-all hover:bg-neutral-700 ease-in-out w-full h-full bg-white bg-opacity-10 after:border-t-white after:-bottom-[4px] before:border-b-white before:-top-[4px] after:z-20 before:z-20 flex justify-center items-center ${SHAPE[type]}`}>
          <div className="z-50 text-white-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  type: 'hexagon' | 'circle' | 'triangle' | 'octogon';
  size?: number;
  order?: number;
  children?: ReactNode;
  active?: boolean;
  action?: () => void;
  label?: string;
  extraClass?: string;
  borderWidth?: string;
};

type StylingObject = {
  height?: string;
  width?: string;
};
