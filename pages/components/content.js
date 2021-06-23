import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import logoPic from '../../public/logo-with-text.png'
import Controls from './controls'

export default function content() {
  return (
    <div className={styles.content_container}>
      <div className={styles.blue_box}>
      </div>
      <Controls />
    </div>
  )
}
