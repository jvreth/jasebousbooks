import styled from 'styled-components'

const StyledSection = styled.section`
  padding: 1rem 0;

  h2 {
    font-size: 1.75rem;
    font-family: var(--font-semibold);
    margin: 1rem 0;
  }

  hr {
    max-width: 30rem;
    margin: 2rem auto;
  }

  .legend-page {

    &__rating-icon {
      color: var(--basic);
      margin-right: .75rem;
      font-size: 1.5rem;
    }
  }
`

export default StyledSection;