import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function NavLink({ href, text, icon }: Prop) {
  return (
    <>
      <a
        href={href}
        className="mx-8 px-4 py-3 rounded-lg flex items-center gap-4 hover:bg-black-300 hover:pl-10 transition-all">
        <FontAwesomeIcon icon={icon} className="w-5" />
        {text}
      </a>
    </>
  );
}

type Prop = {
  href: string;
  text: string;
  icon: IconProp;
};
