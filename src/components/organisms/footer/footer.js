import React from 'react'
import { Link } from 'gatsby'
import Signature from '../../molecules/signature/signature'
import { Container, Badge} from './footer.css'

const Footer = () => (
  <Container>
    <Badge src="https://www.netgalley.de/badge/4392d7d8b1963c42ceffb141e433db1e7eacde44" width="80" height="80" alt="Professioneller Leser" title="Professioneller Leser"/>
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