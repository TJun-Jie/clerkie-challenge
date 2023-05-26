"use client";

// header is a client component
import { usePathname } from "next/navigation";
import { FC } from "react";
import { NavLink } from "../SideBar/SideBar.component";
import styles from "./styles.module.css";

const navLinks: NavLink[] = [
    { title: "Friend Detail", path: "/friendDetail" },
    { title: "Friends", path: "/friends" },
    { title: "Home", path: "/" },
];
const Header: FC = () => {
    const pathname = usePathname();
    const link: NavLink = navLinks.find((navLink) =>  pathname === navLink.path || pathname.startsWith(navLink.path));
    return (
        <div className={styles.header}>
            <div className={styles.title}>{link?.title}</div>
        </div>
    );
};

export default Header;
