import React, { MouseEventHandler } from "react";

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    disabled,
    className,
    children,
}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    );
};

export default Button;
