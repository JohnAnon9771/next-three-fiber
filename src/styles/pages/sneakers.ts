import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--bg-primary);

  height: 100vh;
  width: 100vw;

  .header {
    position: absolute;
    display: flex;
    align-items: center;

    color: var(--white);

    z-index: 1;

    height: 100px;
    width: 100%;

    &__nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      margin: 0 40px;
    }

    &__links {
      display: flex;
      justify-content: space-around;

      width: 30%;
      height: 100%;

      font-weight: bold;
      font-size: 26px;

      .special-link {
        margin-right: 100px;
      }
    }
  }
`

export const Main = styled.main`
  .slideshow {
    height: 100vh;
    width: 100vw;

    .scroll-content {
      height: 100%;
      width: 100%;
    }

    &__list {
      height: 100%;
      width: 100%;
    }

    &__item {
      height: 100%;
      width: 100%;

      .canvas {
        height: 100%;
        z-index: 0;
      }
    }
  }
`
