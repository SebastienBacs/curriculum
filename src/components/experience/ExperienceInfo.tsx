import Text from '@/components/Text';

export default function ExperienceInfo({
  id,
  icon,
  image,
  name,
  duration,
  superShortDescriptions,
  shortDescriptions,
  pos,
  setImageName,
  setOpen,
}: Prop) {
  const onClick = (id: number, image: string) => {
    setOpen(id);
    setImageName(image);
  };

  return (
    <button
      onClick={() => onClick(id, image)}
      onPointerOver={() => setImageName(image)}
      className="grid grid-cols-[auto_1fr] items-start gap-3 transition-all cursor-pointer text-left hover:bg-black-200 rounded-lg sm:px-5 px-2.5 group">
      <div className="flex flex-col h-full justify-start items-center py-2">
        <div className="rounded-3xl w-16 h-16 p-2 bg-black-600">
          <img className="w-full h-full" src={icon} aria-hidden="true" />
        </div>

        <div className="flex-1 w-0.5 mt-3 h-full bg-black-300 group-hover:bg-black-300 group-last:hidden" />
      </div>

      <div className="sm:p-5 px-2.5 py-5">
        <Text weight="bold">{name}</Text>
        <Text Type="span" color="text-blue-300" extraClass="mb-3 hidden xs:block">
          {pos} ~ {duration}
        </Text>
        <Text Type="span" color="text-blue-300" extraClass="block xs:hidden">
          {pos}
        </Text>
        <Text Type="span" color="text-blue-600" extraClass="block xs:hidden">
          {duration}
        </Text>
        <ul>
          {shortDescriptions.map((description, index) => (
            <li key={index} className="list-disc hidden xs:list-item">
              <Text Type="span" color="group-hover:text-white text-white-600">
                {description}
              </Text>
            </li>
          ))}

          {superShortDescriptions.map((description, index) => (
            <li key={index} className="list-disc list-item xs:hidden">
              <Text Type="span" color="group-hover:text-white text-white-600">
                {description}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

type Prop = {
  id: number;
  icon: string;
  image: string;
  name: string;
  duration: string;
  pos: string;
  superShortDescriptions: string[];
  shortDescriptions: string[];
  setImageName: (image: string) => void;
  setOpen: (key: number) => void;
};
