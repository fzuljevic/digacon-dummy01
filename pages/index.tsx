import type {  NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from '../styles/Home.module.scss'
import ProductList from '../products/ProductList'

const Home: NextPage = () => {
  const t = useTranslations('home')
  const [products, setProducts]= useState([])

  return (
    <>
      <main className={styles.main}>
        {/* <div></div>{t('welcome')} */}
        <ProductList/>
       </main>
    </>
  )
}

type tr = {
  locale: string
}

export async function getStaticProps({locale} : tr) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

export default Home
