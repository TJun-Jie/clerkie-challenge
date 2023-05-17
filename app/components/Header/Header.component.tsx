'use client';

// header is a client component
import { usePathname } from 'next/navigation';
import { NavLink, navLinks } from '../SideBar/SideBar.component';
import styles from "./styles.module.css";

function Header() {
    const pathname = usePathname();
    const link: NavLink = navLinks.find((navLink) => navLink.path === pathname);
    return (
        <div className={styles.header}>
            <div className={styles.title}>{link.title}</div>
        </div>
    );
}

export default Header;
