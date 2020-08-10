import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem;
  background-image: url("/images/hero-image-large.jpg");
  background-size: cover;
  height: 40rem;
`;

export const Headline = styled.h1`
  font-family: 'Verona Lotte';
  font-size: 102px;
  font-weight: 400;
  display: inline-block;
  position: relative;
  line-height: 2;
  z-index: 1;

  &:before {
    position: absolute;
    content: "";
    z-index: -1;
    left: -15px;
    right: -15px;
    bottom: 40%;
    border: 30px solid rgba(255, 210, 209, 0.85);
  }
`;
