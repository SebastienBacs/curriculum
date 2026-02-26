import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ProjectLink({ href, hrefText }: Prop) {
  const LinkTag = href ? 'a' : 'p';
  const extraClass = href ? 'cursor-pointer' : '';

  return (
    <LinkTag className={`flex items-center gap-2 text-white-600 z-10 ${extraClass}`} href={href} target="_blank">
      {hrefText}
      {href ? <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-orange-300" /> : <></>}
    </LinkTag>
  );
}

type Prop = {
  href?: string;
  hrefText: string;
};
