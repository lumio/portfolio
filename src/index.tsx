import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ThemeProvider from './common/styles/ThemeProvider';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './common/styles/globalStyles';

ReactDOM.render(
  (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  ),
  document.getElementById( 'root' ) as HTMLElement
);
registerServiceWorker();
