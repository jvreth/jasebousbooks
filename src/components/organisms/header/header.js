import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Container from './header.css'
import MetaNav from './components/metanav'
import useDocumentScrollThrottled from './components/scroll-function'

function Header() {

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  
  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  return (
    <Container className={`header ${shadowStyle} ${hiddenStyle}`}>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/" title="Startseite">Startseite</Link>
          </li>
          <li className="nav__item">
          <Link to="/about-me/" title="Über mich">About Me</Link>
          </li>
          <li className="nav__item">
            <Link to="/blog/" title="Blog Übersicht">Blog</Link>
          </li>
          {/* <li>
            <Link to="/contact/" title="Kontakt">Kontakt</Link>
          </li> */}
        </ul>
      </nav>
      <MetaNav />
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
