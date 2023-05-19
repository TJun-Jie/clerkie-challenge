import { FC, MouseEventHandler } from 'react';
import styles from "./styles.module.css";

interface IconProps {
    content: string ;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}





const ClearButton: FC<IconProps> = ({ content, onClick , disabled}) => {
    return (
        <button className={`${styles.clearButton} ${disabled ? styles.disabledButton: " "}`} onClick={disabled ? null : onClick}>
            {content}
        </button>
    );
}

export default ClearButton;