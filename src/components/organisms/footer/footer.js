import React from 'react'
import { Link } from 'gatsby'
import Signature from '../../molecules/signature/signature'
import Container from './footer.css'

const Footer = () => (
  <Container>
    <nav>
      <Link to="/impressum">Impressum</Link>
      <Link to="/datenschutz">Datenschutz</Link>
    </nav>
    <Signature />
  </Container>
);

export default Footer;