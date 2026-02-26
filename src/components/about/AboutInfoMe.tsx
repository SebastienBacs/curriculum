import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Text from '@/components/Text';

const COL = {
  2: 'col-span-2',
  3: 'col-span-3',
  6: 'col-span-6',
};

export default function AboutInfoMe({ icon, col, label, info }: Props) {
  return (
    <div className={`flex items-center gap-5 ${COL[col]}`}>
      <FontAwesomeIcon className="text-white-600 text-md xs:text-xl p-1 xs:p-3 bg-black-600 rounded-lg" icon={icon} />
      <div className="flex flex-col">
        <Text Type="span" color="text-white-600" extraClass="hidden xs:block">
          {label}
        </Text>
        <Text weight="medium" extraClass="hidden xs:block truncate">
          {info}
        </Text>
        <Text Type="span" weight="medium" extraClass="block xs:hidden truncate">
          {info}
        </Text>
      </div>
    </div>
  );
}

type Props = {
  icon: IconProp;
  col: 2 | 3 | 6;
  label: string;
  info: string;
};
