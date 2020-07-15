import React, { useState } from 'react'
import { Link } from 'gatsby'

import './TopNav.scss'
const TopNav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const hamburgerClass = navOpen
    ? 'navbar__hamburger hamburger hamburger--spin is-active'
    : 'navbar__hamburger hamburger hamburger--spin'

  const mobileNavClass = navOpen
    ? 'TopNav__Mobile TopNav__Mobile--Open'
    : 'TopNav__Mobile'

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <>
      <nav className="TopNav__Desktop">
        <a href="/#home">Home</a>
        <a href="/#commonwealth">Commonwealth</a>
        <a href="/#get-involved">Get Involved</a>
        <Link to="/our-story">Our Story</Link>
      </nav>
      {/* Start Hamburger */}
      <button className={hamburgerClass} type="button" onClick={toggleNav}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <div className={mobileNavClass}>
        <div className="TopNav__Mobile--Contents">
          <a href="/#home" onClick={toggleNav}>
            Home
          </a>
          <a href="/#commonwealth" onClick={toggleNav}>
            Commonwealth
          </a>
          <Link to="/#get-involved" onClick={toggleNav}>
            Get Involved
          </Link>
          <Link to="/our-story" onClick={toggleNav}>
            Our Story
          </Link>
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
