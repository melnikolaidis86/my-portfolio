/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import 'tachyons';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <div
      className='container page-container ph3 ph4-l animated fadeIn'
    >
      <Header siteAuthor={data.site.siteMetadata.author} />
      <div
        id='main'
        className='container mb6'
        role='main'
      >
        {children}
        <footer
          id='main-footer'
          role='contentinfo'
          className='pv6'
        >
          <small className='db tc mt0 text-small text-faded'>
            © {new Date().getFullYear()} Meletis Nikolaidis. All rights reserved.
          </small>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
