import styled from 'styled-components';

const ProjectStyles = styled.section`
  ${ ( props : any ) => '' }
  padding: 7vmin 8vmin;

  ${ ( props ) => props.theme.media.tablet } {
    padding: 3rem 4rem;
  }
`;

export {
  ProjectStyles,
};
