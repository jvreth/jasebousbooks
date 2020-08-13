import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.link`
  display: inline-block;
  background-color: var(--basic);
  border-radius: 3px;
  color: var(--white);
  padding: 1em;
  margin-top: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-size: .75rem;
  min-width: 8rem;
  
  @media screen and (max-width: 42.5em) {
    margin-top: 1rem;
  }

  &:hover {
    background-color: #d35c84;
    box-shadow: 0 3px 6px 0 rgba(57,57,57,0.1), 
      0 3px 6px 0 rgba(57,57,57,0.25), 
      0 0 1px 0 rgba(57,57,57,0.2) inset;
    transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`

const Button = ({ href, text, className }) => (
    <StyledButton className={`button ${className}`} as="a" href={href}>{text}</StyledButton>
);

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Button