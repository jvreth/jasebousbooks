import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StyledArticle from "./blog-post.css"

const CLASS = 'article-page'

const backLink = (
  <Link to="/blog" className={`${CLASS}__back-link`}>
    <FontAwesomeIcon
      className={`${CLASS}__back-link-icon`}
      icon={['fas', 'long-arrow-alt-left']}
    />
    <span className={`${CLASS}__back-link-text`}>Zur Blog Übersicht</span>
  </Link>
)

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const mops = pageContext.posts
  console.log(mops)
  const siteTitle = data.site.siteMetadata.title
  const rating = post.frontmatter.rating
  let ratingArr = []

  const getRating = () => {
    for (let i = 0; i < (rating); i++) {
      ratingArr.push('star');
    }

    if (!Number.isInteger(rating)) {
      ratingArr.pop()
      ratingArr.push('star-half-alt')
    }
    return ratingArr.map((item, i) =>(
      <FontAwesomeIcon
        className={`${CLASS}__rating-icon`}
        key={i}
        icon={['fas', `${item}`]} />
    ))
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <StyledArticle>
        {backLink}
        <header>
          {post.frontmatter.thumbnail && 
            <Img
              className={`${CLASS}__image`}
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
          }
          <h1>
            {post.frontmatter.title}
          </h1>
          <ul className={`${CLASS}__meta`}>
            <li>
              <small>{post.frontmatter.category}</small>
            </li>
            <li>
              <small>{post.frontmatter.date}</small>
            </li>
          </ul>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <section className={`${CLASS}__rating`}>
          <h3>Bewertung</h3>
          {getRating()}
        </section>
        <hr />
        {backLink}
      </StyledArticle>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
`
