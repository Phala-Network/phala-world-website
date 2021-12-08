import Head from 'next/head'
import React, { useState } from 'react'

export const Home = (): JSX.Element => {
  const [startingPoint, setStartingPoint] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent) => {
    setStartingPoint({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleMouseOut = () => {
    setStartingPoint({
      x: 0,
      y: 0,
    })
    const header: any = document.getElementById('container')
    header.style.setProperty('--xdeg', 0)
    header.style.setProperty('--ydeg', 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const header: any = document.getElementById('container')
    const xdeg = ((startingPoint.x - e.clientX) / window.outerWidth) * 2 + 0.5
    header.style.setProperty('--xdeg', xdeg)

    const ydeg = ((startingPoint.y - e.clientY) / window.outerHeight) * 2 + 0.5
    header.style.setProperty('--ydeg', ydeg)
  }

  return (
    <div>
      <Head>
        <title>Phala World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="container"
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
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
        <img className="role" src="/images/05_move_role.png" alt="role" />
        <img
          className="role-shadow"
          src="/images/06_move_role_shadow.png"
          alt="role-shadow"
        />
        <img className="ground" src="/images/02_ground.png" alt="ground" />
      </div>
    </div>
  )
}

export default Home
