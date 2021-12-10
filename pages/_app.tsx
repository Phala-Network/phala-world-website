import React, { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'
import 'normalize.css/normalize.css'
import '../styles/index.scss'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TEY4E3QCEY"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TEY4E3QCEY', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <script async src="/lib/autotrack.js"></script>
      <Component {...pageProps} />
    </>
  )
}
