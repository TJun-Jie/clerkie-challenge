"use client";
import { FC, useEffect, useState } from "react";
import ClearButton from "../components/Button/ClearButton.component";
import IconButton from "../components/Button/IconButton.component";
import DropdownFilter from "../components/DropdownFilter/DropdownFilter.component";
import FriendFeed from "../components/Friends/FriendFeed";
import Icon from "../components/Icon.component";
import friendList, { Person, FriendStatus } from "../mockData";
import Loader from "./loader";
import styles from "./styles.module.css";

const fetchFriends = () => {
    return new Promise<Person[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(friendList);
        }, 1000);
    });
};
const Friends: FC = () => {
    // simulate data fetching
    const [allFriends, setAllFriends] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredFriends, setFilteredFriends] = useState<Person[]>([]);
    const [closeFriendCheck, setCloseFriendCheck] = useState<boolean>(false);
    const [superCloseFriendCheck, setSuperCloseFriendCheck] =
        useState<boolean>(false);
    const [dropDownVisible, setdropDownVisible] = useState<boolean>(false);

    const disableOuterClearButton =
        allFriends.length === filteredFriends.length;

    const showDropdown = () => {
        setdropDownVisible(true);
    };

    const clearAllFilters = () => {
        setCloseFriendCheck(false);
        setSuperCloseFriendCheck(false);
    };

    const clearAllFiltersAndApply = () => {
        clearAllFilters();
        setFilteredFriends(allFriends);
    };

    const onApplyFilters = () => {
        let newlyFilteredFriends = allFriends;

        if (closeFriendCheck || superCloseFriendCheck) {
            newlyFilteredFriends = allFriends.filter((friend) => {
                if (
                    closeFriendCheck &&
                    friend.status === FriendStatus.CloseFriends
                ) {
                    return true;
                }
                if (
                    superCloseFriendCheck &&
                    friend.status === FriendStatus.SuperCloseFriends
                ) {
                    return true;
                }
                return false;
            });
        }

        setFilteredFriends(newlyFilteredFriends);
        setdropDownVisible(false);
    };

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
                <DropdownFilter
                    closeFriendCheck={closeFriendCheck}
                    superCloseFriendCheck={superCloseFriendCheck}
                    setCloseFriendCheck={setCloseFriendCheck}
                    setSuperCloseFriendCheck={setSuperCloseFriendCheck}
                    onApply={onApplyFilters}
                    clearAllFilters={clearAllFilters}
                    visible={dropDownVisible}
                    setVisible={setdropDownVisible}
                />
                <IconButton
                    onClick={showDropdown}
                    className={`${styles.dropdownMenuButton}  ${
                        dropDownVisible ? styles.activeDropDownMenuButton : ""
                    }`}
                    iconTitle={
                        dropDownVisible
                            ? "ActiveOpenFilterIcon"
                            : "OpenFilterIcon"
                    }
                    iconDimensions={20}
                    iconSpaced={true}
                />
                <div className={styles.friendDivider}></div>
                <div className={styles.friendClear}>
                    <ClearButton
                        content="Clear All"
                        onClick={clearAllFiltersAndApply}
                        disabled={disableOuterClearButton}
                    />
                </div>
            </div>
            {isLoading ? <Loader /> : <FriendFeed friends={filteredFriends} />}
        </div>
    );
};

export default Friends;
