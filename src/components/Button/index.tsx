import {ReactNode, useState} from 'react';
import {Spinner} from '@chakra-ui/react';

type ButtonProps = {
  w: string;
  h: string;
  border?: string;
  color?: string;
  bg?: string;
  hoverBg?: string;
  hoverColor?: string;
  hoverBorder?: string;
  fontSize?: string;
  borderRadius?: string;
  children: ReactNode;
  isLoading?: boolean;
  onClick?: (e: any) => void;
};

export function Button({
  w,
  h,
  border,
  color,
  bg,
  hoverBg,
  hoverColor,
  hoverBorder,
  fontSize,
  borderRadius,
  children,
  isLoading,
  onClick,
}: ButtonProps) {
  const [hover, setHover] = useState<boolean>(false);

  const styleButton = {
    width: w ?? '80px',
    height: h ?? '30px',
    border: isLoading ? `1px solid ${bg ?? '#999'}` : hover && hoverBorder ? hoverBorder : border ? border : 'none',
    background: isLoading ? 'none' : hover && hoverBg ? hoverBg : bg ? bg : '#999',
    color: hover && hoverColor ? hoverColor : color ? color : '#000',
    fontSize: fontSize ?? 'inherit',
    borderRadius: borderRadius ?? 'none',
    outline: 0,
    transition: '0.3s',
    cursor: 'pointer',
  };

  return (
    <button
      style={styleButton}
      onClick={(e) => onClick?.(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={isLoading}>
      {isLoading ? <Spinner color={color ?? 'white'} size="sm" /> : children}
    </button>
  );
}
