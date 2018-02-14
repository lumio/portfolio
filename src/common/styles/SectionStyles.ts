import styled from 'styled-components';
import images from '../static';
import theme from './theme';

interface SectionStylesPropsType {
  root? : boolean;
  wide? : boolean;
}

const SectionStyles = styled.div`
  ${ ( props : SectionStylesPropsType ) => '' }
  position: relative;

  width: 100%;
  max-width: ${ ( props ) => props.root || props.wide ? '100%' : '110rem' };
  margin: 0 auto;
  ${ ( props ) => (
    props.root ? `
      z-index: 100;
      min-height: 100vh;
      overflow-x: hidden;
    ` : `
      height: 100vh;
      overflow: hidden;
      background: url( ${ images.backgroundImage } ) no-repeat left bottom;
      background-size: cover;
    `
  ) }

  ${ theme.media.tablet } {
    background: none;
  }
`;

export default SectionStyles;
