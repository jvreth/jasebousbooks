import styled from 'styled-components'

const Container = styled.section`
  background-color: rgb(255, 210, 209);
  padding: 4rem;

  @media screen and (max-width: 64.5em) {
    padding: 1rem;
    margin-top: 1rem;
  }
  
  .insta {

    &__link {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-family: var(--font-josi-semibold);
      color: var(--greyDarker);

      &:hover {
        color: var(--black);
        transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      }
  
      &-icon {
        margin-right: 0.5rem;
      }
    }

    &__post {
      position: relative;
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 8px;

      @media screen and (max-width: 42.5em) {
        width: 150px;
        height: 150px;
        margin-bottom: 1rem;
      }

      @media screen and (max-width: 64.5em) {
        margin: 1rem auto;
      }

      &-image {
        height: 100%;
      }

      &-caption {
        position: absolute;
        font-size: 0.85rem;
        bottom: -100%;
        transition: bottom .5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        padding: 10px;
        background-color: rgba(245, 245, 245, 0.8);
        height: 100%;

        p {
          text-align: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
          display: block;

          @media screen and (max-width: 42.5em) {
            font-size: .75rem;
          }
        }
      }

      &:hover .insta__post-caption {
        bottom: 0;
      }
    }
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    flex-wrap: wrap;

    @media screen and (max-width: 63.5em) {
      > div {
        width: 50%;
      }
    }

    @media screen and (min-width: 80em) {
      max-width: 70rem;
      margin: 0 auto;
    }

    &--center {
      justify-content: center;
    }
  }
`;

export default Container
