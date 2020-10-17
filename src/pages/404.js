import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Seite nicht gefunden" />
      <div className="content">
        <h1>Leider haben wir die Seite nicht gefunden.</h1>
        <p>Oops! Scheint als ob wir die Seite, die du gesucht hast nicht gefunden haben.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
