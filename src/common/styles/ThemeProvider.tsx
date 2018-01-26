import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './theme';

const ThemeProvider : React.StatelessComponent<any> = ( props : any ) => (
    <StyledThemeProvider theme={ theme }>
      { props.children }
    </StyledThemeProvider>
);

export default ThemeProvider;
