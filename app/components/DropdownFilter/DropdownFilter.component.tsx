import { Dispatch, FC, SetStateAction } from "react";
import ClearButton from "../Button/ClearButton.component";
import IconButton from "../Button/IconButton.component";
import styles from "./styles.module.css";

interface DropdownProps {
    closeFriendCheck: boolean;
    superCloseFriendCheck: boolean;
    setCloseFriendCheck: Dispatch<SetStateAction<boolean>>;
    setSuperCloseFriendCheck: Dispatch<SetStateAction<boolean>>;
    onApply: () => void;
    clearAllFilters: () => void;
    visible: boolean;
    setVisible: (state: boolean) => void;
}

const DropdownFilter: FC<DropdownProps> = ({
    closeFriendCheck,
    superCloseFriendCheck,
    setCloseFriendCheck,
    setSuperCloseFriendCheck,
    onApply,
    clearAllFilters,
    visible,
    setVisible,
}) => {
    const disableInnerClearButtons = !(
        closeFriendCheck || superCloseFriendCheck
    );

    const hideDropdown = () => {
        setVisible(false);
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
                            checked={closeFriendCheck}
                            onChange={(e) =>
                                setCloseFriendCheck(e.target.checked)
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
                            checked={superCloseFriendCheck}
                            onChange={(e) =>
                                setSuperCloseFriendCheck(e.target.checked)
                            }
                        />
                    </div>
                </div>
                <button
                    className={styles.dropdownApplyButton}
                    onClick={onApply}
                >
                    Apply
                </button>
            </div>
        )
    );
};

export default DropdownFilter;
