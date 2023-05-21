import { Dispatch, FC, SetStateAction } from "react";
import ClearButton from "../Button/ClearButton.component";
import IconButton from "../Button/IconButton.component";
import styles from "./styles.module.css";

interface DropdownProps {
    onApply: (newCloseFriendState: boolean, newSuperCloseFriendState: boolean) => void;
    visible: boolean;
    setVisible: (state: boolean) => void;
    unconfirmedCloseFriendCheck: boolean;
    unconfirmedSuperCloseFriendCheck: boolean;
    setUnconfirmedCloseFriendCheck: Dispatch<SetStateAction<boolean>>;
    setUnconfirmedSuperCloseFriendCheck: Dispatch<SetStateAction<boolean>>;
}

const DropdownFilter: FC<DropdownProps> = ({
    onApply,
    visible,
    setVisible,
    unconfirmedCloseFriendCheck,
    unconfirmedSuperCloseFriendCheck,
    setUnconfirmedCloseFriendCheck,
    setUnconfirmedSuperCloseFriendCheck
    
}) => {

    const disableInnerClearButtons = !(
        unconfirmedCloseFriendCheck || unconfirmedSuperCloseFriendCheck
    );

    const hideDropdown = () => {
        setVisible(false);
    };


    const clearAllFilters = () => {
        setUnconfirmedCloseFriendCheck(false);
        setUnconfirmedSuperCloseFriendCheck(false);
    };

    return (
        visible && (
            <div className={styles.dropdown}>
                <div className={styles.dropdownHeader}>
                    <ClearButton
                        onClick={clearAllFilters}
                        content={"Clear All"}
                        disabled={disableInnerClearButtons}
                    />
                    <div className={styles.dropdownTextBold}>Filter</div>
                    <IconButton
                        onClick={hideDropdown}
                        className={styles.cancelButton}
                        iconTitle="CancelIcon"
                        iconDimensions={17}
                        iconSpaced={false}
                    />
                </div>
                <div className={styles.dropdownSeparator}></div>
                <div className={styles.dropdownContent}>
                    <div className={styles.dropdownStatus}>Friend Status</div>
                    <div className={styles.dropdownCheckBoxGroup}>
                        <div className={styles.dropdownTextBold}>
                            Close Friends
                        </div>
                        <input
                            className={styles.dropdownCheckBox}
                            type="checkbox"
                            checked={unconfirmedCloseFriendCheck}
                            onChange={(e) =>
                                setUnconfirmedCloseFriendCheck(e.target.checked)
                            }
                        />
                    </div>
                    <div className={styles.dropdownCheckBoxGroup}>
                        <div className={styles.dropdownTextBold}>
                            Super Close Friends
                        </div>
                        <input
                            className={styles.dropdownCheckBox}
                            type="checkbox"
                            checked={unconfirmedSuperCloseFriendCheck}
                            onChange={(e) =>
                                setUnconfirmedSuperCloseFriendCheck(e.target.checked)
                            }
                        />
                    </div>
                </div>
                <button
                    className={styles.dropdownApplyButton}
                    onClick={() => {onApply(unconfirmedCloseFriendCheck, unconfirmedSuperCloseFriendCheck)}}
                >
                    Apply
                </button>
            </div>
        )
    );
};

export default DropdownFilter;
