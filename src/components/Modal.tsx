import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button';
import Text from '@/components/Text';
import Box from '@/components/Box';

export default function Modal({ children, open, onClose, title, size = 'md', buttons }: Prop) {
  const modalClass = open ? 'opacity-100 z-[1000]' : 'opacity-0 z-[-10]';
  const marginClass = open ? 'mb-0' : 'mb-40';
  const modalSize = {
    sm: 'sm:w-[500px] sm:h-auto',
    md: 'sm:w-[700px] sm:h-auto',
    lg: 'sm:w-[1000px] sm:h-auto',
  };

  const displayChildren = () => {
    if (!children) {
      return '';
    }
    return (
      <>
        <hr className="sm:my-2 border-white-500" />
        <div
          className={`flex-grow overflow-y-auto overflow-x-hidden -mr-2 pl-px pr-2 max-h-modal-body-mobile md:max-h-modal-body`}
          tabIndex={-1}>
          {children}
        </div>
      </>
    );
  };

  const displayButtonZone = () => {
    return (
      <>
        <hr className="sm:my-2" />
        <div className="flex gap-2 justify-between items-center">{buttons}</div>
      </>
    );
  };

  return (
    <div
      className={`fixed flex items-center justify-center left-0 right-0 top-0 bottom-0 transition-all duration-300 ${modalClass}`}>
      <div
        onClick={onClose}
        className={`bg-black bg-opacity-80 fixed left-0 right-0 top-0 bottom-0 transition-all duration-300 ${modalClass}`}
      />
      <Box
        className={`flex flex-col sm:block p-5 w-full h-full z-50 relative transition-all duration-300 ${modalClass} ${marginClass} ${modalSize[size]}`}
        padding="p-5 sm:px-10 sm:pb-10 sm:pt-5">
        <div className="absolute right-5 top-5">
          <Button
            ariaLabel="close modal"
            action={onClose}
            tabIndex={!open ? -1 : 0}
            icon={<FontAwesomeIcon icon={faClose} className="h-3 w-3" />}
          />
        </div>
        <Text Type="p" weight="medium" color="text-white" extraClass="text-lg md:text-2xl">
          {title}
        </Text>
        {displayChildren()}
        {buttons ? displayButtonZone() : <></>}
      </Box>
    </div>
  );
}

type Prop = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  size?: string;
  buttons?: ReactNode;
};
