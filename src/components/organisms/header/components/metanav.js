import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from './metanav.css'

const MetaNav = () => (
  <Container>
    <a href="https://instagram.com/jasebousbooks" target="_blank" rel="noreferrer" title="Instagram Profil">
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </a>
    <a href="https://www.tiktok.com/@jasebousbooks" target="_blank" rel="noreferrer" title="TikTok Profil">
      <FontAwesomeIcon icon={['fab', 'tiktok']} />
    </a>
    <a href="https://www.goodreads.com/user/show/91458172-jasebou" target="_blank" rel="noreferrer" title="Goodreads Profil">
      <FontAwesomeIcon icon={['fab', 'goodreads-g']} />
    </a>
    <a href="https://github.com/jvreth" target="_blank" rel="noreferrer" title="GitHub Profil">
      <FontAwesomeIcon icon={['fab', 'github-alt']} />
    </a>
  </Container>
)

export default MetaNav;
