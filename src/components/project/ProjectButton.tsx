import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function ProjectButton({ icon, ariaLabel, action }: Prop) {
  return (
    <button
      className="rounded-full p-3 bg-project-button text-white h-10 w-10 flex items-center justify-center"
      aria-label={ariaLabel}
      onClick={action}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

type Prop = {
  icon: IconProp;
  ariaLabel?: string;
  action: () => void;
};
