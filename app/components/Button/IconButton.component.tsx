import React, { MouseEventHandler } from "react";
import Icon from "../Icon.component";
import Button from "./Button.component";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    iconTitle: string;
    iconDimensions: number;
    iconSpaced: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    disabled,
    className,
    iconTitle,
    iconDimensions,
    iconSpaced,
}) => {
    return (
        <Button onClick={onClick} disabled={disabled} className={className}>
            <Icon
                title={iconTitle}
                dimensions={iconDimensions}
                spaced={iconSpaced}
            />
        </Button>
    );
};

export default IconButton;
