import {ReactNode, useState} from 'react';

type IconButtonProps = {
  size: 'sm' | 'md' | 'lg';
  children: ReactNode;
  color?: string;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
};

export function IconButton({size, children, color, variant, onClick}: IconButtonProps) {
  const [hover, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const style = {
    background: variant === 'solid' ? '#999' : 'none',
    border: variant === 'solid' ? '0' : `1px solid ${color}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    width: size === 'sm' ? '30px' : size === 'md' ? '40px' : '70px',
    height: size === 'sm' ? '30px' : size === 'md' ? '40px' : '70px',
    borderRadius: '5px',
    transition: '0.3s',
    boxShadow: active ? 'inset 0px 0px 10px 0px #E6E6E6' : hover ? '0px 0px 20px -6px #C2C2C2' : 'none',
  };

  return (
    <button
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}>
      {children}
    </button>
  );
}
