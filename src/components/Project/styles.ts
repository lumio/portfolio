import styled from 'styled-components';

const ProjectStyles = styled.section`
  ${ ( props : any ) => '' }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 7vmin 8vmin;

  h1 {
    font-size: 2.3em;
    font-weight: 700;
    line-height: 1.1;

    em {
      font-style: normal;
      font-weight: 400;
    }
  }

  ${ ( props ) => props.theme.media.tablet } {
    padding: 3rem 4rem;

    h1 {
      font-size: 3.6em;
    }
  }
`;

export {
  ProjectStyles,
};
