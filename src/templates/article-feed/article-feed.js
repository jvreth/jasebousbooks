import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Article from '../../components/molecules/article/article'
import Container from './article-feed.css'

const CLASS = "article-feed"

class ArticleFeed extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <Layout>
        <SEO title="Blog" />
        <div className="content">
          <Container className={CLASS}>
            <h1 className={`${CLASS}__headline`}>Blog Übersicht</h1>
            <Article items={posts} />
            <ul className={`${CLASS}__pagination`}>
              {!isFirst && (
                <li>
                  <Link to={`/blog/${prevPage}`} rel="prev">
                    <FontAwesomeIcon
                      className={`${CLASS}__pagination-icon-prev`}
                      icon={['fas', 'angle-left']}
                    />
                    <span className={`${CLASS}__pagination-text`}>Vorherige Seite</span>
                  </Link>
                </li>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <li key={i + 1}>
                  <Link
                    className={`${i + 1 === currentPage && `${CLASS}__current-page`}`}
                    key={i + 1}
                    to={`/blog/${i === 0 ? "" : i + 1}`}
                  >
                    <span className={`${CLASS}__pagination-text`}>{i + 1}</span>
                  </Link>
                </li>
              ))}
              {!isLast && (
                <li>
                  <Link to={`/blog/${nextPage}`} rel="next">
                    <span className={`${CLASS}__pagination-text`}>Nächste Seite</span>
                    <FontAwesomeIcon
                      className={`${CLASS}__pagination-icon-next`}
                      icon={['fas', 'angle-right']}
                    />
                  </Link>
                </li>
              )}
            </ul>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default ArticleFeed

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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