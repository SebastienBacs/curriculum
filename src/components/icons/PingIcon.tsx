import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PingIcon({ icon, colorText, colorPing }: Props) {
  return (
    <span className="relative flex h-3 w-3">
      <FontAwesomeIcon
        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colorPing}`}
        icon={icon}
      />
      <FontAwesomeIcon className={`relative inline-flex rounded-full h-3 w-3 ${colorText}`} icon={icon} />
    </span>
  );
}

type Props = {
  icon: IconProp;
  colorText: string;
  colorPing: string;
};
