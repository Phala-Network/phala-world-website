import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Phala World</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container">
      <img
        className="element"
        src="/images/03_move_element.png"
        alt="element"
      />
      <img
        className="lighting"
        src="/images/04_move_lighting.png"
        alt="lighting"
      />
      <img 
        className="role"
        src="/images/05_move_role.png"
        alt="role"
      />
      <img 
        className="role-shadow"
        src="/images/06_move_role_shadow.png"
        alt="role-shadow"
      />
      <img 
        className="ground"
        src="/images/02_ground.png"
        alt="ground"
      />
    </div>

  </div>
)

export default Home
