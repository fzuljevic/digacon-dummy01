import type { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {
  const t = useTranslations('home')

  return (
    <>
      <main className={styles.main}>
        {t('welcome')}
      </main>
    </>
  )
}

export default Home


export async function getStaticProps({locale} : any) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}