import styled from 'styled-components'
import '../../../assets/scss/settings/_variables.scss'

const Container = styled.section`
  background-color: rgb(255, 210, 209);
  padding: 4rem;

  a {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-family: var(--font-josi-semibold);
    color: var(--greyDarker);

    .icon {
      margin-right: 0.5rem;
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

  .insta-post {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;

    .insta-post__caption {
      position: absolute;
      font-size: 0.85rem;
      color: #222;
      bottom: -100%;
      transition: bottom .5s;
      padding: 10px;
      background-color: rgba(255, 210, 209, 0.8);

      p {
        text-align: center;
        height: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 180px;
        margin: 0;
      }
    }

    &:hover .insta-post__caption {
      bottom: 0;
    }
  }
`;

export default Container
