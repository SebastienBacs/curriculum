import { faCircle } from '@fortawesome/free-solid-svg-icons';

import PingIcon from '@/components/icons/PingIcon';
import Corner from '@/components/Corner';
import Nav from '@/components/nav/Nav';
import Text from '@/components/Text';

export default function HomeFrame() {
  return (
    <div>
      {/* Top bar */}
      <div className="fixed z-[100] top-0 left-0 h-4 md:h-8 w-full bg-background">
        <Nav />
      </div>
      {/* Bottom bar */}
      <div className="absolute flex items-end items-center bottom-0 left-0 h-4 md:h-8 pb-4 md:pb-8 w-full bg-background">
        <div className="relative h-16 rounded-3xl w-[220px] md:w-[300px] mx-auto bg-background flex justify-center">
          <Corner side="bottom-right" className="bottom-8 -left-[19px]" />
          <Corner side="bottom-left" className="bottom-8 -right-[19px]" />
          <a href="#about" className="flex gap-5 items-center px-3 pb-5 md:pb-0 md:px-10">
            <PingIcon icon={faCircle} colorPing="text-green-300" colorText="text-green-400" />
            <Text>Let's work together</Text>
          </a>
        </div>
      </div>

      {/* Left bar */}
      <div className="absolute top-0 left-0 h-full w-4 md:w-8 bg-background" />

      {/* Right bar */}
      <div className="absolute top-0 right-0 h-full w-4 md:w-8 bg-background" />

      <Corner side="top-left" className="top-[15px] md:top-[31px] left-[15px] md:left-[31px]" />
      <Corner side="top-right" className="top-[15px] md:top-[31px] right-[15px] md:right-[31px]" />
      <Corner side="bottom-left" className="bottom-[15px] md:bottom-[31px] left-[15px] md:left-[31px]" />
      <Corner side="bottom-right" className="bottom-[15px] md:bottom-[31px] right-[15px] md:right-[31px]" />
    </div>
  );
}
