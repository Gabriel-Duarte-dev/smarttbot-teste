import { useState } from "react";

type IconButtonProps = {
    size: 'sm' | 'md' | 'lg';
    children: any;
    color?: string;
    variant?: 'solid' | 'outline'
    onClick?: () => void
}

export function IconButton({size, children, color, variant}: IconButtonProps) {

    const [hover, setHover] = useState<boolean>(false)

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
        boxShadow: hover ? '0px 0px 20px -6px #C2C2C2' : 'none'
    }

    return(
        <button style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {children}
        </button>
    )
}