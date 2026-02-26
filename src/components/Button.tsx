export default function Button({
  label,
  loading = false,
  icon,
  position = 'left',
  type = 'button',
  Tag = 'button',
  href,
  target,
  tabIndex,
  ariaLabel,
  action,
}: Prop) {
  const styleClass = type === 'submit' ? 'bg-[#3A3A49] hover:bg-[#4A4A59] text-lg' : 'bg-[#1C1C21] hover:bg-[#2C2C31]';
  const sizeClass = label ? 'rounded-lg p-2.5' : 'h-6 w-6 text-sm rounded-full p-1.5';

  return (
    <Tag
      className={`text-white flex items-center justify-center transition-all duration-300 gap-4 w-full ${sizeClass} ${styleClass}`}
      type={type}
      disabled={loading}
      tabIndex={tabIndex}
      href={href}
      target={target}
      aria-label={ariaLabel}
      onClick={action}>
      {icon && position === 'left' ? icon : <></>}
      {loading ? 'Sending...' : label}
      {icon && position === 'right' ? icon : <></>}
    </Tag>
  );
}

type Prop = {
  label?: string;
  loading?: boolean;
  icon?: JSX.Element | JSX.Element[];
  position?: 'left' | 'right';
  type?: 'submit' | 'button';
  Tag?: 'button' | 'a';
  href?: string;
  target?: string;
  tabIndex?: number;
  ariaLabel?: string;
  action?: () => void;
};
