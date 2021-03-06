import '../styles/index.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ReactElement } from 'react';
import { useGtagHandlerouteChange } from 'services/gtag';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  useGtagHandlerouteChange();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
