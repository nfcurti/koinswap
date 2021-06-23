import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Content from './components/content'
import Controls from './components/controls'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Koinswap</title>
        <meta name="description" content="Koinswap - Bitcoin Price Prediction" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://presale.koinswap.finance/favicon.png" />
      </Head>

      <main className={styles.bgcontainer}>
        <Header />
        <Content />
      </main>

    </div>
  )
}
