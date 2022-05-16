import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { NextIntlProvider } from 'next-intl';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../redux/reducer';

// const store = configureStore(rootReducer, applyMiddleware(thunk):);

const store = configureStore({ reducer: rootReducer });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </NextIntlProvider>
  );
}

export default MyApp;
