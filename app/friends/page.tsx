"use client";
import { Suspense, useEffect, useState } from "react";
import FriendCard from "../components/Friends/FriendCard";
import FriendFeed from "../components/Friends/FriendFeed";
import Icon from "../components/Icon.component";
import friendList, { Person, FriendStatus} from "../mockData";
import Loader from "./loader";
import styles from "./styles.module.css";

const fetchFriends = () => {
    return new Promise<Person[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(friendList);
        }, 1000);
    });
};
export default function Home() {
    // simulate data fetching
    const [allFriends, setAllFriends] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [filteredFriends, setFilteredFriends] = useState<Person[]>([]);
    const [closeFriendCheck, setCloseFriendCheck] = useState(false);
    const [superCloseFriendCheck, setSuperCloseFriendCheck] = useState(false);
    const [dropDownVisible, setdropDownVisible] = useState(false);

    const showDropdown = () => {
        setdropDownVisible(true);
    };

    const hideDropdown = () => {
        setdropDownVisible(false);
    };

    const clearAllFilters = () => {
      setCloseFriendCheck(false);
      setSuperCloseFriendCheck(false);
    }

    const clearAllFiltersAndApply = () => {
      clearAllFilters();
      setFilteredFriends(allFriends);
    }

    const onApplyFilters = () => {
      let newlyFilteredFriends = allFriends;
  
      if (closeFriendCheck || superCloseFriendCheck) {
          newlyFilteredFriends = allFriends.filter((friend) => {
              if (closeFriendCheck && friend.status === FriendStatus.CloseFriends) {
                  return true;
              }
              if (superCloseFriendCheck && friend.status === FriendStatus.SuperCloseFriends) {
                  return true;
              }
              return false;
          });
      }
  
      setFilteredFriends(newlyFilteredFriends);
      setdropDownVisible(false);
  }

    useEffect(() => {
        const fetchFriendsData = async () => {
            const friends: Person[] = await fetchFriends();
            setAllFriends(friends);
            setFilteredFriends(friends);
            setIsLoading(false);
        };

        fetchFriendsData();
    }, []);

    return (
        <div className={styles.friendPageMainDiv}>
            <div className={styles.friendHeader}>
                {dropDownVisible && (
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownHeader}>
                            <button onClick={clearAllFilters}>Clear All</button>
                            
                            <div className={styles.dropdownTextBold}>
                                Filter
                            </div>
                            <button
                                className={styles.cancelButton}
                                onClick={hideDropdown}
                            >
                                <Icon
                                    title="CancelIcon"
                                    dimensions={17}
                                    spaced = {false}
                                ></Icon>
                            </button>
                        </div>
                        <div className={styles.dropdownSeparator}></div>
                        <div className={styles.dropdownContent}>
                            <div className={styles.dropdownStatus}>
                                Friend Status
                            </div>
                            <div className={styles.dropdownCheckBoxGroup}>
                                <div className={styles.dropdownTextBold}>
                                    Close Friends
                                </div>
                                <input
                                    className={styles.dropdownCheckBox}
                                    type="checkbox"
                                    checked={closeFriendCheck}
                                    onChange={(e) =>
                                        setCloseFriendCheck(e.target.checked)
                                    }
                                />
                            </div>
                            <div className={styles.dropdownCheckBoxGroup}>
                                <div className={styles.dropdownTextBold}>
                                    Super Close Friends{" "}
                                </div>
                                <input
                                    className={styles.dropdownCheckBox}
                                    type="checkbox"
                                    checked={superCloseFriendCheck}
                                    onChange={(e) =>
                                        setSuperCloseFriendCheck(
                                            e.target.checked
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <button
                            className={styles.dropdownApplyButton}
                            onClick={onApplyFilters}
                        >
                            Apply
                        </button>
                    </div>
                )}
                <button className={styles.clearButton} onClick={showDropdown}>
                    <Icon title="FriendHeaderIcon" dimensions={20} spaced={true}></Icon>
                </button>
                <div className={styles.friendDivider}></div>
                <div className={styles.friendClear}><button onClick={clearAllFiltersAndApply}>Clear all</button></div>
            </div>
            {isLoading ? <Loader /> : <FriendFeed friends={filteredFriends} />}
        </div>
    );
}
