import {useState} from 'react';

type TextFieldProps = {
  type?: 'text' | 'number';
  w?: string;
  h?: string;
  color?: string;
  bg?: string;
  border?: string;
  borderRadius?: string;
  p?: string;
  fontSize?: string;
  placeholder?: string;
  hoverBg?: string;
  hoverColor?: string;
  hoverBorder?: string;
  onChange?: (e: any) => void;
};

export function TextField({
  type,
  w,
  h,
  color,
  bg,
  border,
  p,
  fontSize,
  borderRadius,
  placeholder,
  hoverBg,
  hoverColor,
  hoverBorder,
  onChange,
}: TextFieldProps) {
  const [hover, setHover] = useState<boolean>(false);

  const inputStyle = {
    width: w ?? 'inherit',
    height: h ?? 'inherit',
    padding: p ?? 'inherit',
    border: hover && hoverBorder ? hoverBorder : border ? border : '1px solid #555',
    background: hover && hoverBg ? hoverBg : bg ? bg : 'none',
    color: hover && hoverColor ? hoverColor : color ? color : '#000',
    fontSize: fontSize ?? 'inherit',
    borderRadius: borderRadius ?? 'none',
    outline: 0,
  };

  return (
    <input
      type={type ?? 'text'}
      style={inputStyle}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
}
