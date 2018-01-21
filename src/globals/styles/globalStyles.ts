import { injectGlobal } from 'styled-components';

export default injectGlobal`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 1rem/1.3 sans-serif;
  }
`;
