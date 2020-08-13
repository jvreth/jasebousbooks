import styled from 'styled-components'

const StyledArticle = styled.article`
  width: 60rem;
  margin: 1rem auto;
  padding: 1rem;
  
  .article-page {

    &__image {
      display: block;
      margin: 0 auto;
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
  }
  
  h2 {
    font-size: 1.5rem;
    font-family: var(--font-semibold);
    margin: 1.5rem 0;
  }
  
  h3 {
    font-family: var(--font-semibold);
    font-size: 1.25rem;
    margin: 1rem 0;
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
