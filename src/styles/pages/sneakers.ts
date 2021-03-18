import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--bg-primary);

  height: 100vh;
  width: 100vw;

  .header {
    position: absolute;
    display: flex;
    align-items: center;

    z-index: 1;

    background-color: var(--white);
    height: 100px;
    width: 100%;

    &__nav {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
`

export const Main = styled.main`
  height: 100vh;
  width: 100vw;

  .canvas {
    z-index: 0;
  }
`
