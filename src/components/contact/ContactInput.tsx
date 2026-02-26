import Text from '@/components/Text';

export default function ContactInput({ value, label, name, type, Tag, placeholder, onChange }: Prop) {
  return (
    <label className="space-y-3">
      <Text Type="p" color="text-white-600">
        {label}
      </Text>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-600 shadow-black-200 shadow-2xl focus:outline-none"
        placeholder={placeholder}
        rows={5}
      />
    </label>
  );
}

type Prop = {
  value: string;
  label: string;
  name: string;
  type: string;
  Tag: 'textarea' | 'input';
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
