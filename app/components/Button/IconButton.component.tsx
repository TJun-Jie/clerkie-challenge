import React, { MouseEventHandler } from "react";
import Icon from "../Icon.component";
import Button from "./Button.component";
import styles from "./styles.module.css";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    iconTitle: string;
    iconDimensions: number;
    iconSpaced: boolean;
    content?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    disabled,
    className,
    iconTitle,
    iconDimensions,
    iconSpaced,
    content,
}) => {
    return (
        <Button onClick={onClick} disabled={disabled} className={className}>
            <Icon
                title={iconTitle}
                dimensions={iconDimensions}
                spaced={iconSpaced}
            />
            {content ? <span className={styles.iconButtonContent}>{content}</span> : ""}
            
        </Button>
    );
};

export default IconButton;
