import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  :root {
    --bg-primary: #020101;
    --brown: #5F1E04;
    --light-gray: #5A5856;
    --white: #F4F3F3;
    --light-brown: #943003;
    --light-gray: #AO9F9E;


  .hide-for-mobile {
    @media screen and (max-width: 649px) {
      display: none;
    }
  }

  .hide-for-desktop {
    @media screen and (min-width: 649px)  {
      display: none;
    }
  }

  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
