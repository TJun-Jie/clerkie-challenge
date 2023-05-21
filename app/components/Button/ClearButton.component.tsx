import { FC, MouseEventHandler } from "react";
import Button from "./Button.component";
import styles from "./styles.module.css";

interface ClearButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    content: string;
}

const ClearButton: React.FC<ClearButtonProps> = ({
    onClick,
    disabled,
    content,
}) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className={`${styles.clearButton}`}
        >
            {content}
        </Button>
    );
};

export default ClearButton;
