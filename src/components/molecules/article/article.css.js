import styled from 'styled-components'

const Container = styled.div`
  
  .width--half {
    width: 50%;

    @media screen and (max-width: 42.5em) {
      width: 100%;
    }
  }
  
  .article {
    display: flex;
    margin: 1rem;
    padding: 2rem;
    background-color: var(--greyLighter);
    border-radius: 8px;

    @media screen and (max-width: 42.5em) {
      margin: 1rem 0;
      padding: 1rem;
      flex-direction: column;

      header {
        text-align: center;
      }
    }

    &__title {
      margin: 0.5rem 0;
      font-size: 1.25rem;
    }

    &__description {
      font-size: .85rem;
    }
    
    &__thumb {
      padding-right: 2rem;
      border-radius: 8px;
      overflow: hidden;
      max-height: 280px;

      @media screen and (max-width: 42.5em) {
        padding-right: 0;
      }
    }

    &__link {
      
      &:hover {
        color: var(--basic);
        transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      }

      &--readmore {
        text-transform: uppercase;
        font-size: .75rem;
      }

      &-text {
        margin-right: .5rem;
      }
    }

    small {
      text-transform: uppercase;
      font-size: .75rem;
    }
  }
`;

export default Container;