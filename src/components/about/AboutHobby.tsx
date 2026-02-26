import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const COLOR = {
  red: 'border-red-500 bg-red-950',
  green: 'border-green-500 bg-green-950',
  yellow: 'border-yellow-500 bg-yellow-950',
  purple: 'border-purple-500 bg-purple-950',
  blue: 'border-blue-500 bg-blue-950',
};

export default function AboutHobby({ open, icon, color }: Props) {
  return (
    <div
      className={`flex items-center justify-center text-white w-10 h-10 -mr-5 rounded-lg z-10 rotate-45 border ${COLOR[color]}`}
      tabIndex={!open ? -1 : 0}>
      <FontAwesomeIcon className="-rotate-45" icon={icon} />
    </div>
  );
}

type Props = {
  open?: boolean;
  icon: IconProp;
  color: string;
};
