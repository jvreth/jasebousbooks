/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
// import moduleName from 'fortawesome/react-fontawesome'
import { fab } from "@fortawesome/free-brands-svg-icons"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./organisms/header/header"
import Footer from "./organisms/footer/footer"
// import InstagramFeed from "./organisms/instagram-feed/instagram"

library.add(fas, fab);

const Layout = ({ children, className }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
        <main>
          <div className={className}>
            {children}
          </div>
        </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
