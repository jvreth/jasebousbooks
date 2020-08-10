import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ href, text }) => (
    <a href={href}>{text}</a>
);

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}

export default styled(Button)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;