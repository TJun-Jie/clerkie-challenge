import { FC } from "react";
import styles from "./styles.module.css";
const Loader: FC = () => {
    return (
        <div>
            {Array.from({ length: 6 }).map((_, index) => (
                <div className={styles.cardDiv} key={index}>
                    <div className={styles.cardUpperDiv}>
                        <div className={styles.upperLoader}></div>
                    </div>
                    <div className={styles.lowerLoader}></div>
                </div>
            ))}
        </div>
    );
};

export default Loader;
