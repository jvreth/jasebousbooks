import styled from 'styled-components';
import '../../../assets/scss/settings/_variables.scss';

const Container = styled.footer`
  padding: 4rem 1rem;
  text-align: center;
  background-color: var(--greyLight);

  a {
    font-family: var(--font-josi-semibold);
    color: var(--basic);
    transition: color 0.2s ease;
    text-decoration: none;
    margin-right: 10px;

    &:hover {
      color: var(--pink);
    }
  }
`;

export default Container;