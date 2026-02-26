import Text from '@/components/Text';
import Box from '@/components/Box';

export default function Review({ text, name, image, position, logo, stars }: Prop) {
  return (
    <Box borders={false} padding="md:p-10 p-5" className="justify-between h-full">
      <Text weight="light">{text}</Text>

      <img
        src={logo}
        aria-hidden="true"
        className="absolute right-4 bottom-1/2 translate-y-1/2 h-64 w-64 opacity-5 pointer-events-none select-none"
      />

      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img src={image} aria-hidden="true" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <Text Type="span" color="text-white-600">
              {position}
            </Text>
            <Text weight="medium">{name}</Text>
          </div>
        </div>
      </div>
    </Box>
  );
}

type Prop = {
  text: string;
  name: string;
  image: string;
  position: string;
  logo: string;
  stars: number;
};
