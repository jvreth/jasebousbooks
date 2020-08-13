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
`;

export const Headline = styled.h1`
  font-family: 'Verona Lotte';
  font-size: 8rem;
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
    left: -15px;
    right: -15px;
    bottom: 40%;
    border: 30px solid rgba(255, 210, 209, 0.85);
  }

  @media screen and (max-width: 42.5em) {
    font-size: 5rem;

    &:before {
      bottom: 100%;
      top: 17%;
      border-width: 20px;
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
  }

  @media screen and (max-width: 64.5em) {
    font-size: 7rem;
  }
`;
