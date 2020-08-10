import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Instagram from '../../atoms/instagram'
import Container from './instagram.css'

const InstagramFeed = () => (
  <>
    <Container>
    <div className="row row--center">
      <a href="https://instagram.com/jasebousbooks" target="_blank" rel="noreferrer">
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </span>
        <span>Me on Instagram</span>
      </a>
    </div>
    <div className="row">
      <Instagram className="insta-post" />
    </div>
    </Container>
  </>
)

export default InstagramFeed
