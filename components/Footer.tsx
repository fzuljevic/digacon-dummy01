import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss'

function Footer ()  {
  const t = useTranslations('home')

  return (
    <footer className={styles.footer}>{t('footer')} &copy;</footer>
    )
}

export default Footer

export async function getStaticProps({locale} : any) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}