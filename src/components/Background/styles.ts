import styled from 'styled-components';
import images from '../../common/static';

const BackgroundStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;

  width: 100%;
  height: 100vh;

  // iOS has problems with fixed backgrounds on the body.
  // So we create a fixed background layer instead.
  background: url( ${ images.backgroundImage } ) no-repeat left bottom;
  background-size: cover;
`;

export {
  BackgroundStyled,
};
