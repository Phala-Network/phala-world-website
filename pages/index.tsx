import React, { useState } from 'react'
import Layout from '../components/Layout'

export const Home = (): JSX.Element => {
  const [startingPoint, setStartingPoint] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent) => {
    setStartingPoint({
      x: e.clientX,
      y: e.clientY,
    })
    const container: any = document.getElementById('container')
    container.setAttribute('class', 'container moving')
  }

  const handleMouseLeave = () => {
    setStartingPoint({
      x: 0,
      y: 0,
    })
    const container: any = document.getElementById('container')
    container.setAttribute('class', 'container')
    container.style.setProperty('--xdeg', 0)
    container.style.setProperty('--ydeg', 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const container: any = document.getElementById('container')
    const xdeg = ((e.clientX - startingPoint.x) / window.outerWidth) * 2 + 0.5
    container.style.setProperty('--xdeg', xdeg)

    const ydeg = ((e.clientY - startingPoint.y) / window.outerHeight) * 2 + 0.3
    container.style.setProperty('--ydeg', ydeg)
  }

  return (
    <Layout>
      <div
        id="container"
        className="container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
        <div className="text-info">
          <span className="name">PHALAWORLD | </span>
          <span className="desc">COMING SOON IN 2022</span>
        </div>
        <div className="img-buttons">
          <a
            href="http://discord.gg/phala"
            title="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/00_Bottom_Discord.png" alt="Discord" />
          </a>
          <a
            href="https://twitter.com/PhalaWorld"
            title="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/00_Bottom_Twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Home
