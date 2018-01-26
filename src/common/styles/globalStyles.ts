import { injectGlobal } from 'styled-components';
import images from '../static';

export default injectGlobal`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font: 1.4rem/1.3 Raleway, sans-serif;
    font-variant-ligatures: common-ligatures;
    background: url( ${ images.backgroundImage } ) no-repeat fixed left bottom;
    background-size: cover;
  }

  a, a:link, a:visited {
    display: inline-block;
    color: #000;
    padding: .25rem .5rem;
    margin: -.25rem -.5rem;
    background: rgba( 0, 0, 0, 0 );
    transform: scale( 1 );
    transition: transform .1s;
  }

  a:active {
    transform: scale( .95 );
  }

  a:hover {
    color: #fff;
    background: #000;
    text-decoration: none;
  }
`;
