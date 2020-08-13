import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import Link from 'gatsby'
import { darken } from 'polished'

import '../../assets/scss/settings/_variables.scss';

const HeadlineLink = ({ text, href }) => (
  <h2>
    <a href={href}>{text}</a>
  </h2>
);

HeadlineLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string
}

export default styled(HeadlineLink)`
  font-family: var(--font-josi-semibold);
  color: var(--basic);

  a {
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    text-decoration: none;
  }
`;