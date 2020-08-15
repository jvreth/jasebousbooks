import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import Icon from "../../assets/svg/xoxo-jasebou.svg"
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

const arcInfo = (
  <div className={`${CLASS}__arc-info`}>
    <hr className={`${CLASS}__separator`} />
    <span className={`${CLASS}__arc-info-icon`}>
      <FontAwesomeIcon icon={['fas', 'info-circle']} />
    </span>
    <span>
      Dieses Buch wurde mir im Austausch gegen meine ehrliche Meinung als kostenloses Rezensionsexemplar zur Verfügung gestellt.
      Meine Meinung bleibt natürlich trotzdem unverfälscht.
    </span>
    <hr className={`${CLASS}__separator`} />
  </div>
)

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
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

  const renderRating = () => (
    <>
    <h3>Bewertung</h3>
    {getRating()}
    </>
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="content">
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
            {post.frontmatter.arc && arcInfo}
          </header>
          <section className={`${CLASS}__text`} dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.rating && (
            <section className={`${CLASS}__rating`}>
              {renderRating()}
            </section>
          )}
          {post.frontmatter.signature && (
            <section className={`${CLASS}__signature`}>
              <Icon width="300px" />
            </section>
          )}
          <hr />
          {backLink}
        </StyledArticle>
      </div>
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
        date(formatString: "MMMM DD, YYYY", locale: "de")
        title
        description
        category
        rating
        arc
        signature
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
