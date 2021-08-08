import styled from 'styled-components'

const StyledArticle = styled.article`
  padding: 0 1rem 0;

  .article-page {

    &__image {
      display: block;
      margin: 0 auto;

      @media screen and (min-width: 43.5em) {
        max-width: 40rem;
      }
    }

    &__meta {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        margin-right: 1rem;
        position: relative;

        &:not(:last-child):after {
          content: "";
          background-color: var(--basic);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          right: -10px;
        }
      }
    }

    &__arc-info {
      font-size: .875rem;
      width: 100%;

      &-icon {
        margin-right: .5rem;
      }

      @media screen and (min-width: 43.5em) {
        width: 80%;
        margin: 0 auto;
      }
    }

    &__text {

      ul {
        padding-left: 2rem;
        line-height: 2;

        li {
          list-style-type: disc;
        }
      }

      a {
        color: var(--basic);
        font-weight: 600;

        &:hover {
          color: var(--pink);
          transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        }
      }
    }

    &__signature svg {
      display: block;
      margin: 0 auto;
    }

    &__separator {
      max-width: 30rem;
      margin: 2rem auto;
    }

    &__back-link {
      margin: 1rem 0;
      font-size: .75rem;
      display: inline-block;

      &:hover {
        color: var(--basic);
        transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      }

      &-text {
        margin-left: .5rem;
      }
    }

    &__rating {
      font-size: 1.5rem;

      &-icon {
        color: var(--basic);
        margin-right: 1rem;
      }
    }
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3.5rem;
    font-family: var(--font-light);
    margin: 1rem 0 .25rem;
    font-weight: 200;
    color: var(--basic);

    @media screen and (max-width: 42.5em) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    font-family: var(--font-semibold);
    margin: 2rem 0;
  }

  h3 {
    font-family: var(--font-semibold);
    font-size: 1.25rem;
    margin: 3rem 0 1.5rem;
  }

  small {
    font-size: .75rem;
  }

  p {
    font-size: 1rem;
  }

  blockquote {
    background: var(--greyLighter);
    border-left: .75rem solid var(--basic);
    padding: 1rem .75rem;
    margin: 0;

    p {
      line-height: 1rem;
    }
  }
`;

export default StyledArticle
