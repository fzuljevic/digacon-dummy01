import { useTranslations } from 'next-intl';
import styles from './Header.module.scss';
import React from 'react';

function Header() {
  const t = useTranslations('home');

  return <header className={styles.header}>{t('header')}</header>;
}

export default Header;

export async function getStaticProps(locale: string) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
