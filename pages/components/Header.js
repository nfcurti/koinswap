import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.navbar}>
        
      <img src='https://cdn.discordapp.com/attachments/856208542041899048/856505731709009930/logo-with-text.png' />
        
      <ul>
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
      </ul>
    </div>
  )
}
