import { FC, useState, useEffect } from "react";
import Icon from "../Icon.component";
import FriendCard from "./FriendCard";
import styles from "./styles.module.css";
import friendList, { Person } from "../../mockData";



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
    )

}


export default FriendFeed;