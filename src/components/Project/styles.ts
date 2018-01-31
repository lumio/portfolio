import styled from 'styled-components';

const ProjectStyles = styled.section`
  ${ ( props : any ) => '' }
  padding: 8vmin;

  ${ ( props ) => props.theme.media.tablet } {
    padding: 4rem;
  }
`;

export {
  ProjectStyles,
};
