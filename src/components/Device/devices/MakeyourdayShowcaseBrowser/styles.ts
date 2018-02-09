import styled from 'styled-components';
const screenshotUrl = require( './screenshot.jpg' );

const MakeyourdayShowcaseBrowserStyles = styled.div`
  width: 100%;
  height: 100%;
  background: url( ${ screenshotUrl } ) no-repeat center top;
  background-size: cover;
`;

export { MakeyourdayShowcaseBrowserStyles };
