import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Text from '@/components/Text';

export default function ExperienceTag({ icon, label, text, color, col, row }: Props) {
  return (
    <div className={`bg-black-200 rounded-lg p-2 relative flex flex-col justify-center ${col} ${row}`}>
      {icon ? (
        <FontAwesomeIcon
          className={`hidden xs:block text-2xl opacity-30 rounded-full absolute left-4 top-1/2 -translate-y-1/2 ${color}`}
          icon={icon}
        />
      ) : (
        <></>
      )}
      <div className="xs:mx-auto">
        {label ? (
          <Text Type="span" color="text-white-600" extraClass="block">
            {label}
          </Text>
        ) : (
          <></>
        )}
        <Text Type={label ? 'p' : 'h5'} weight="medium" extraClass="block w-full">
          {text}
        </Text>
      </div>
    </div>
  );
}

type Props = {
  icon?: IconProp;
  label?: string;
  text: string;
  color?: string;
  col: string;
  row: string;
};
