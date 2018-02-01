import styled from 'styled-components';

const ProjectStyles = styled.section`
  ${ ( props : any ) => '' }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 7vmin 8vmin;

  ${ ( props ) => props.theme.media.tablet } {
    padding: 3rem 4rem;
  }
`;

export {
  ProjectStyles,
};
