import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { NextIntlProvider } from 'next-intl';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
}

export default MyApp;
