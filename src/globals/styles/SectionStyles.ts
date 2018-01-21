import styled from 'styled-components';

interface SectionStylesPropsType {
  root? : boolean;
}

const SectionStyles = styled.div`
  width: 100%;
  ${ ( props : SectionStylesPropsType ) => (
    props.root ? 'min-height: 100vh;' : 'height: 100vh;'
  ) }
`;

export default SectionStyles;
