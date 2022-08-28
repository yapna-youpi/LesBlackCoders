import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Header from '../components/header/Header'
import Main from "../components/Main/Main"
import Footer from '../components/footer/Footer'

export default function Home() {

  const colorTheme = () =>{
    nightwind.toggle();
    setSoon(!soon);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BlackCoders</title>
        <meta name="description" content="site for enterprise Blackcoders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        < Header />
        <Main />
        <Footer />
      </main>
        
    </div>
  )
}
