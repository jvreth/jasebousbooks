import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/atoms/button"
import Hero from "../components/molecules/hero/hero"
import Article from "../components/molecules/article/article"

const TextCenter = styled.div`
  text-align: center;
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Jasebousbooks Start" />
      <Hero />
      <div className="content">
        <Article items={data.allMarkdownRemark.edges} />
        <TextCenter>
          <Button className="button--center" href="/blog/" text="Weiter zur Blog Übersicht" />
        </TextCenter>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 6) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "de")
            title
            description
            category
            rating
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 510) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
