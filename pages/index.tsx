import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <header className={styles["page__header"]}>Dummie header</header>
      <main className={styles.main}>
      </main>
      <footer className={styles["page__footer"]}>All rights reserved. &copy;</footer>
    </>
  )
}

export default Home