import styled from 'styled-components'

export const Container = styled.div`
  /* background-color: var(--bg-primary); */

  height: 100vh;
  width: 100vw;

  .header {
    position: absolute;

    background-color: var(--white);

    &__nav {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
`
