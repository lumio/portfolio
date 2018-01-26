import styled from 'styled-components';

interface SectionStylesPropsType {
  root? : boolean;
}

const SectionStyles = styled.div`
  ${ ( props : SectionStylesPropsType ) => '' }
  position: relative;

  width: 100%;
  ${ ( props ) => (
    props.root ? `
      z-index: 100;
      min-height: 100vh;
    ` : `
      height: 100vh;
    `
  ) }
  overflow-x: hidden;
`;

export default SectionStyles;
