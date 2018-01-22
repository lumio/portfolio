import { injectGlobal } from 'styled-components';
import images from '../static';

export default injectGlobal`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 1rem/1.3 sans-serif;
    background: url( ${ images.backgroundImage } ) no-repeat fixed left bottom;
    background-size: cover;
  }
`;
