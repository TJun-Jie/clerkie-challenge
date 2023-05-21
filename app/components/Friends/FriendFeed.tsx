import { FC } from "react";
import FriendCard from "./FriendCard";
import { Person } from "../../mockData";

interface FriendFeedProps {
    friends: Person[];
}

const FriendFeed: FC<FriendFeedProps> = ({ friends }) => {
    return (
        <>
            {friends.map((friend, index) => (
                <FriendCard
                    key={index}
                    name={friend.name}
                    status={friend.status}
                    email={friend.email}
                    phoneNumber={friend.phoneNumber}
                />
            ))}
        </>
    );
};

export default FriendFeed;
