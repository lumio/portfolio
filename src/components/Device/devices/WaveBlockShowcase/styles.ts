import styled from 'styled-components';
const screenshotUrl = require( './screenshot.png' );

const WaveBlockShowcaseBrowserStyles = styled.div`
  width: 100%;
  height: 100%;
  background: url( ${ screenshotUrl } ) no-repeat center top;
  background-size: cover;
`;

export { WaveBlockShowcaseBrowserStyles };
