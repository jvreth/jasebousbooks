import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem;
  background-image: url("/images/hero-image-large.jpg");
  background-size: cover;
  height: 40rem;

  @media screen and (max-width: 42.5em) {
    height: 20rem;
  }

  @media screen and (min-width: 80em) {
    height: 60rem;
  }
`;

export const Headline = styled.h1`
  font-family: 'Verona Lotte';
  font-size: 5rem;
  font-weight: 400;
  display: inline-block;
  position: relative;
  line-height: 2;
  z-index: 1;
  color: var(--greyDarkest);
  text-align: center;

  &:before {
    position: absolute;
    content: "";
    z-index: -1;
    top: 17%;
    left: -15px;
    right: -15px;
    bottom: 100%;
    border: 20px solid rgba(255, 210, 209, 0.85);
  }

  &:after {
    position: absolute;
    content: "";
    z-index: -1;
    left: -15px;
    right: -15px;
    bottom: 20%;
    border: 20px solid rgba(255, 210, 209, 0.85);
  }

  @media screen and (min-width: 41em) {
    &:before {
      bottom: 40%;
      top: auto;
      border-width: 30px;
    }
  
    &:after {
      display: none;
    }
  }

  @media screen and (min-width: 43em) {
    font-size: 7rem;
  }

  @media screen and (min-width: 64em) {
    font-size: 8rem;
  }

  @media screen and (min-width: 80em) {
    font-size: 10em;

    &:before {
      border-width: 33px;
    }
  }
`;
