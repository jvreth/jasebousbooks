import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  border-bottom: 1px solid var(--greyLight);
  background-color: rgba(255,255,255,0.95);
  width: 100%;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &.header.shadow {
    box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
  }

  &.header.hidden {
    transform: translateY(-110%);
  }

  .nav {
    display: flex;

    &__item a {
      margin-right: 1.5rem;
    }
  }

  a {
    font-family: var(--font-josi-semibold);
    color: var(--basic);
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
      color: var(--pink);
    }
  }
`;

export default Container;