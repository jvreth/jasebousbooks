import React from 'react'
import Container from './signature.css'

const Signature = () => {
  const getYear = new Date().getFullYear();


  return (
    <Container>
      <span>Mit Gatsby und voller <span aria-labelledby="unicorn-emoji" role="img">🦄</span> - Power aus Leverkusen</span>
      <div>&copy; Jasebousbooks {getYear}</div>
    </Container>
  )
};

export default Signature;