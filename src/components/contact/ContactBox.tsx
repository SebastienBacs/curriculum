import { JSX } from 'react';

import Box from '@/components/Box';

export default function BoxContact({ children }: Prop) {
  return (
    <Box noGap={true} padding="p-0" className="overflow-hidden border-neutral-700">
      <div className="flex justify-between shadow-md items-center h-12 px-5 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900">
        <div className="flex gap-3">
          <div className="bg-red-400 shadow-2xl shadow-red w-3.5 h-3.5 rounded-full" />
          <div className="bg-yellow-400 shadow-2xl shadow-yellow w-3.5 h-3.5 rounded-full" />
          <div className="bg-green-400 shadow-2xl shadow-green w-3.5 h-3.5 rounded-full" />
        </div>
      </div>
      <div className="p-5 md:p-10 bg-noise">
        <div className="mx-auto max-w-xl relative z-10 md:px-10 mt-0 md:mt-5">{children}</div>
      </div>
    </Box>
  );
}

type Prop = {
  children: JSX.Element | JSX.Element[];
  borders?: boolean;
  variant?: boolean;
  paddingLarge?: boolean;
  className?: string;
};
