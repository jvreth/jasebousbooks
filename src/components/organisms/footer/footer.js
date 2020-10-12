import React from 'react'
import { Link } from 'gatsby'
import Signature from '../../molecules/signature/signature'
import Container from './footer.css'

const Footer = () => (
  <Container>
    <nav>
      <Link to="/impressum" title="Impressum">Impressum</Link>
      <Link to="/datenschutz" title="Datenschutz">Datenschutz</Link>
      {/* <Link to="/contact/" title="Kontakt">Kontakt</Link> */}
      <Link to="/legend/" title="Bewertungslegende">Bewertungslegende</Link>
    </nav>
    <Signature />
  </Container>
);

export default Footer;