import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import logoPic from '../../public/logo-with-text.png'

export default function Header() {
  return (
    <div className={styles.navbar}>
        
      
      <Image src={logoPic} alt="logo" />
      <ul className={styles.ul_nav}>
        <li className={styles.nav_item}>
          <a >Cashier</a>
          <div className={styles.Frame}></div>
        </li>
        <li className={styles.nav_item}><a >Bankroll</a>
          <div className={styles.Frame}></div>
        </li>
        <li className={styles.nav_item}><a >Stats</a>
          <div className={styles.Frame}></div>
        </li>
        <li className={styles.nav_item}><a >Leaderboard</a>
          <div className={styles.Frame}></div>
        </li>
        <li className={styles.nav_item}><a >Help</a>
          <div className={styles.Frame}></div>
        </li>
        <li className={styles.connect}><a >Connect</a>
        </li>
        <li className={styles.nav_item_b}><a >KOIN: 0</a>
        </li>
      </ul>
    </div>
  )
}
