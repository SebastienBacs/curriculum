import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '@/components/Text';

const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 pt-7 pb-3 border-t border-black-300 flex justify-between items-center gap-5">
      <div className="flex flex-col gap-2 md:w-1/2">
        <div className="gap-2 hidden md:flex">
          <Text color="text-white-600">Project Icons</Text>
          <Text color="text-white-600">|</Text>
          <a href="https://www.flaticon.com/" target="_blank">
            <Text color="text-white-600" extraClass="underline">
              FlatIcon
            </Text>
          </a>
        </div>
      </div>

      <div className="flex gap-3 text-white">
        <a
          href="https://github.com/SebastienBacs"
          target="_blank"
          aria-label="github link"
          className="p-2 bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 rounded-full flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12">
          <FontAwesomeIcon icon={faGithub} className="w-4 sm:w-5 h-4 sm:h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/sebastien-bacs/"
          target="_blank"
          aria-label="linkedin link"
          className="p-2 bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 rounded-full flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12">
          <FontAwesomeIcon icon={faLinkedin} className="w-4 sm:w-5 h-4 sm:h-5" />
        </a>
      </div>

      <Text color="text-white-600" extraClass="flex flex-grow justify-end w-1/2">
        © 2026 Sebastien Bacs
      </Text>
    </footer>
  );
};

export default Footer;
