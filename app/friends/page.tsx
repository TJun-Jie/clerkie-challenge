"use client";
import { Suspense, useEffect, useState } from "react";
import FriendCard from "../components/Friends/FriendCard";
import Icon from "../components/Icon.component";
import friendList, { Person } from "../mockData";
import Loading from "./loading";
import styles from "./styles.module.css";



const fetchFriends = () => {
  return new Promise<Person[]>((resolve, reject) => {
      setTimeout(() => {
          resolve(friendList);
      }, 1000);
  });
};
export default async function Home() {
  // simulate data fetching
  const friends : Person[] = await fetchFriends();
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.friendPageMainDiv}>
        <div className={styles.friendHeader}>
          <div className={styles.friendHeaderIcon}>
            <Icon src="/friendheader.svg" alt="Friend Header" dimensions={20}></Icon>
          </div>
          <div className={styles.friendDivider}></div>
          <div className={styles.friendClear}> Clear all</div>

        </div>
        {friends.map((friend, index) => (
          <FriendCard
            key={index}
            name={friend.name}
            status={friend.status}
            email={friend.email}
            phoneNumber={friend.phoneNumber}
          />
        ))}
      </div>
    </Suspense>
  )
}
