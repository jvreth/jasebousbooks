import styled from 'styled-components';

const Container = styled.footer`
  padding: 4rem 1rem;
  text-align: center;
  background-color: var(--greyLighter);

  a {
    font-family: var(--font-josi-semibold);
    color: var(--basic);
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    text-decoration: none;
    margin-right: 1rem;

    &:hover {
      color: var(--pink);
    }
  }
`;

export default Container;