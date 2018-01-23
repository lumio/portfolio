import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from './globals/styles/theme';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './globals/styles/globalStyles';

ReactDOM.render(
  (
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  ),
  document.getElementById( 'root' ) as HTMLElement
);
registerServiceWorker();
