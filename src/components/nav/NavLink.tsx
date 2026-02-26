import Text from '@/components/Text';

export default function NavLink({ href, text, active }: Prop) {
  return (
    <a href={href} className={`relative group px-5 py-4 ${active ? 'cursor-default' : 'cursor-pointer'}`}>
      <Text>{text}</Text>
      <span
        className={`absolute left-0 right-0 mx-auto bottom-3 h-px w-0 bg-white transition-all duration-300 group-hover:w-3/4 ${active ? 'w-3/4' : ''}`}></span>
    </a>
  );
}

type Prop = {
  href: string;
  text: string;
  active: boolean;
};
