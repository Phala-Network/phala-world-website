import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Phala World</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    phala world!
  </div>
)

export default Home
