import React, { ReactElement } from 'react'
import { AppProps } from 'next/app'
import "normalize.css/normalize.css";
import '../styles/index.scss'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}