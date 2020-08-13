import styled from 'styled-components'

const Container = styled.section`
  background-color: rgb(255, 210, 209);
  padding: 4rem;
  
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

      &-caption {
        position: absolute;
        font-size: 0.85rem;
        bottom: -100%;
        transition: bottom .5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        padding: 10px;
        background-color: rgba(245, 245, 245, 0.8);

        p {
          text-align: center;
          height: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 180px;
          margin: 0;
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

    &--center {
      justify-content: center;
    }
  }
`;

export default Container
