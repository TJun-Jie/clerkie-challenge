import Link from "next/link";
import { FC } from "react";
import { FriendStatus } from "../../mockData";
import styles from "./styles.module.css";

interface FriendCardProps {
    name: string;
    status?: string;
    email: string;
    phoneNumber: string;
    id: number;
}

const FriendCard: FC<FriendCardProps> = ({
    name,
    status,
    email,
    phoneNumber,
    id,
}) => {
    const getStatusClassName = () => {
        if (status === FriendStatus.CloseFriends) {
            return styles.cardCloseFriends;
        } else if (status === FriendStatus.SuperCloseFriends) {
            return styles.cardSuperCloseFriends;
        }
        return "";
    };
    return (
        <Link href={`/friendDetail/${id}`} className={styles.cardDiv}>
            <div className={styles.cardUpperDiv}>
                <div className={styles.cardName}>{name}</div>
                {status && (
                    <div
                        className={`${
                            styles.cardStatus
                        } ${getStatusClassName()}`}
                    >
                        {status}
                    </div>
                )}
            </div>
            <div className={styles.cardLowerDiv}>
                <div className={styles.cardEmail}>{email}</div>
                <span>&#x2022;</span>
                <div className={styles.cardNumber}>{phoneNumber}</div>
            </div>
        </Link>
    );
};

export default FriendCard;
