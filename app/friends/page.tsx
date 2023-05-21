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

    const [unconfirmedCloseFriendCheck, setUnconfirmedCloseFriendCheck] =
        useState<boolean>(false);
    const [
        unconfirmedSuperCloseFriendCheck,
        setUnconfirmedSuperCloseFriendCheck,
    ] = useState<boolean>(false);
    const [dropDownVisible, setdropDownVisible] = useState<boolean>(false);
    const [numberOfSelectedFilters, setNumberOfSelectedFilters] =
        useState<number>(0);
    const [clearButtonDisabled, setClearButtonDisabled] =
        useState<boolean>(false);

    let hasActiveFilters = numberOfSelectedFilters > 0;

    const showDropdown = () => {
        setdropDownVisible(true);
    };

    useEffect(() => {
        const numberOfFilters = [
            closeFriendCheck,
            superCloseFriendCheck,
        ].filter(Boolean).length;
        setNumberOfSelectedFilters(numberOfFilters);
        setClearButtonDisabled(numberOfFilters == 0);
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
    }, [closeFriendCheck, superCloseFriendCheck, allFriends]);

    const clearAllFiltersAndApply = () => {
        setCloseFriendCheck(false);
        setSuperCloseFriendCheck(false);
        setFilteredFriends(allFriends);
        setClearButtonDisabled(true);
        setUnconfirmedCloseFriendCheck(false);
        setUnconfirmedSuperCloseFriendCheck(false);
    };

    const onApplyFilters = (
        newCloseFriendState: boolean,
        newSuperCloseFriendState: boolean
    ) => {
        setCloseFriendCheck(newCloseFriendState);
        setSuperCloseFriendCheck(newSuperCloseFriendState);
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
                    onApply={onApplyFilters}
                    visible={dropDownVisible}
                    setVisible={setdropDownVisible}
                    unconfirmedCloseFriendCheck={unconfirmedCloseFriendCheck}
                    unconfirmedSuperCloseFriendCheck={unconfirmedSuperCloseFriendCheck}
                    setUnconfirmedCloseFriendCheck={setUnconfirmedCloseFriendCheck}
                    setUnconfirmedSuperCloseFriendCheck={setUnconfirmedSuperCloseFriendCheck}
                />
                <IconButton
                    onClick={showDropdown}
                    className={`${styles.dropdownMenuButton}  ${
                        hasActiveFilters ? styles.activeDropDownMenuButton : ""
                    }`}
                    iconTitle={
                        hasActiveFilters
                            ? "ActiveOpenFilterIcon"
                            : "OpenFilterIcon"
                    }
                    iconDimensions={20}
                    iconSpaced={true}
                    content={
                        hasActiveFilters
                            ? numberOfSelectedFilters.toString()
                            : ""
                    }
                />
                <div className={styles.friendDivider}></div>
                <div className={styles.friendClear}>
                    <ClearButton
                        content="Clear All"
                        onClick={clearAllFiltersAndApply}
                        disabled={clearButtonDisabled}
                    />
                </div>
            </div>
            {isLoading ? <Loader /> : <FriendFeed friends={filteredFriends} />}
        </div>
    );
};

export default Friends;
