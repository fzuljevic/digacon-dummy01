import { useTranslations } from 'next-intl';
import styles from './Header.module.scss'

function Header ()  {
  const t = useTranslations('home')

  return (
    <header className={styles.header}>{t('header')}</header>
    )
}

export default Header

export async function getStaticProps({locale} : any) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}