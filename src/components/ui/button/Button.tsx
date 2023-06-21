import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import cn from 'clsx';


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'blue' | 'white',
    size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
    children, 
    className, 
    variant,
    size = 'md',
    ...rest
}) => {
    return <button {...rest} className={cn('btn' , {
        'btn-blue': variant == 'blue',
        'btn-white': variant == 'white',
        'px-5 py-2 text-sm': size == 'sm',
        'btn-large': size == 'lg',
    }, className)}>{children}</button>
}

export default Button