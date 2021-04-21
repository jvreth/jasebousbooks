import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Instagram = ({ className }) => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(limit: 4, sort: {fields: timestamp, order: DESC}) {
          edges {
            node {
              id
              likes
              comments
              mediaType
              preview
              original
              timestamp
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        {
          data.allInstaNode.edges.map((item, i) => (
            item.node.localFile ? (
              <div key={i}>
                <figure className={className}>
                  <Img
                    className={`${className}-image`}
                    fluid={item.node.localFile.childImageSharp.fluid}
                  />
                  <figcaption className={`${className}-caption`}>
                    <p>{item.node.caption}</p>
                  </figcaption>

                </figure>
              </div>
            ) : ''
          ))
        }
      </>
    )}
  />
)

export default Instagram;