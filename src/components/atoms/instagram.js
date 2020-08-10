import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Instagram = ({ className }) => (
  <StaticQuery
    query={graphql`
      {
        allInstaNode(limit: 5, sort: {fields: timestamp, order: DESC}) {
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
                  fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              thumbnails {
                src
                config_width
                config_height
              }
              dimensions {
                height
                width
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
                    style={{ borderRadius: '8px' }}
                    fixed={item.node.localFile.childImageSharp.fixed}
                  />
                  <figcaption className={`${className}__caption`}>
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