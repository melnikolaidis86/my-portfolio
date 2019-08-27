import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteAuthor }) => (
  <header
    id='page-header'
    role='banner'
    className='pv6 cf'
  >
    <h1 className='fl'>
      <Link
        to="/"
        itemProp="url"
      >
        {siteAuthor}
      </Link>
    </h1>
    <nav className='fr'>
      <Link
        to="/about/"
        className='text-large text-dark'
        itemProp="url"
      >
        About
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteAuthor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
