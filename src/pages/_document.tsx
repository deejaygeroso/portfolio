import Document, { Head, Html, Main, NextScript } from 'next/document';

import { GlobalStyles } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deejay Geroso',
  description: 'Deejay Geroso Portfolio',
};

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Frontend Tech Lead specializing in design systems & performance engineering. Remote-first leader with proven track record shipping products at scale.'
          />
        </Head>
        <body>
          <GlobalStyles
            styles={{
              html: { height: '100%', width: '100%', margin: 0, padding: 0 },
              body: {
                margin: 0,
                padding: 0,
                backgroundColor: '#f5f5f5',
              },
              a: { textDecoration: 'none', color: 'inherit' },
            }}
          />
          <AppRouterCacheProvider>
            <Main />
            <NextScript />
          </AppRouterCacheProvider>
        </body>
      </Html>
    );
  }
}
