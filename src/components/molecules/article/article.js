import React from 'react'
import Container from './article.css'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'gatsby-image';

const CLASS = 'article';

const Article = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      item.node ? (
        <article
          key={i}
          className={CLASS}
        >
          {item.node.frontmatter.thumbnail &&
            <div className={`width--half ${CLASS}__thumb`}>
              <Img fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid} />
            </div>
          }
          <div className={`width--half ${CLASS}__text`}>
            <header>
              <small className={`${CLASS}__category`}>{item.node.frontmatter.category}</small>
              <h3 className={`${CLASS}__title`}>
                <Link
                  className={`${CLASS}__link`}
                  to={item.node.fields.slug}>
                  {item.node.frontmatter.title}
                </Link>
              </h3>
              <small className={`${CLASS}__date`}>{item.node.frontmatter.date}</small>
            </header>
            <section>
              <p
                className={`${CLASS}__description`}
                dangerouslySetInnerHTML={{
                  __html: item.node.frontmatter.description || item.node.excerpt,
                }}
              />
              <Link
                className={`${CLASS}__link ${CLASS}__link--readmore`}
                to={item.node.fields.slug}
              >
                <span className={`${CLASS}__link-text`}>Mehr</span>
                <FontAwesomeIcon
                  className={`${CLASS}__link-icon`}
                  icon={['fas', 'angle-right']}
                />
              </Link>
            </section>
          </div>
        </article>
      ) : ''
    ))}
  </Container>
)

export default Article