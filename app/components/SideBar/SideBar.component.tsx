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
      <Icon title={"ClerkieIcon"} dimensions={20} spaced={true}/>
      <span>Clerkie Challenge</span>
    </div>
    {navLinks.map( (link) => (
          <Link href={link.path} key={link.path}>
          <div className={`${styles.link} ${pathname== link.path ? styles.activeLink : " "}`}>
              <Icon title={link.title}  dimensions={24} spaced={true}/>
              <span>{link.title}</span>
          </div>
      </Link>
    ))}
  </div>
    )
}


export default SideBar;