import styled from 'styled-components'

const Container = styled.div`
  .article-feed {
    &__headline {
      font-size: 3.5rem;
      font-family: var(--font-light);
      font-weight: 200;
      margin: 1rem 0 2rem;
      color: var(--basic);
      text-align: center;
    }

    &__pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;

      &-icon-prev {
        margin-right: .5rem;
      }

      &-icon-next {
        margin-left: .5rem;
      }

      li {
        margin-right: .5rem;
      }

      a {
        padding: 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        min-height: 45px;
        color: var(--grey);
        text-align: center;
        text-transform: uppercase;
        font-size: .75rem;
        border-radius: 4px;
        border: 1px solid var(--grey);
        font-family: var(--font-semibold);

        &.article-feed__current-page {
          color: var(--greyDarker);
          background-color: var(--basic);
          border-color: var(--basic);

          &:hover {
            color: inherit;
          }
        }

        &:hover {
          color: var(--basic);
          border-color: var(--basic);
          transition: color .3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, border-color .4s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        }
      }
    }
  }
`

export default Container