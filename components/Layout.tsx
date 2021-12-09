import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
}

const Index = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="index, follow" name="robots" />
        <meta
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          name="viewport"
        />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta name="keywords" content="Phala,Game" />
        <meta name="description" content="Phala World" />
        <title>Phala World</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}

export default Index
