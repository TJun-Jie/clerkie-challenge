"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Icon from '../Icon.component';
import styles from './styles.module.css';

export interface NavLink {
  title: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {title: 'Home', path: '/'},
  {title: 'Friends', path: '/friends'}
]

const SideBar: FC = () => {
  const pathname = usePathname();
    return (
  <div className={styles.sidebar}>
    <div className={styles.sidebarHeader}>
      <Icon src="/ClerkieIcon.svg" alt="clerkie icon" dimensions={20}/>
      <span>Clerkie Challenge</span>
    </div>
    {navLinks.map( (link) => (
          <Link href={link.path} key={link.path}>
          <div className={`${styles.link} ${pathname== link.path ? styles.activeLink : " "}`}>
              <Icon src="/Home.svg" alt="Home Icon" dimensions={24}/>
              <span>{link.title}</span>
          </div>
      </Link>
    ))}
  </div>
    )
}


export default SideBar;