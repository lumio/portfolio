import styled from 'styled-components';

const ProjectStyles = styled.section`
  ${ ( props : any ) => '' }
  display: grid;
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

  > .project__title {
    grid-area: header;
    align-self: end;
  }

  > .project__description {
    grid-area: description;
  }

  > .project__showcase {
    grid-area: showcase;
  }

  ${ ( props ) => props.theme.media.tablet } {
    padding: 3rem 4rem;
    grid-template:
      [row1-start] ". header" 1fr [row1-end]
      [row2-start] "description showcase" 4fr [row2-end]
      / 1fr 2fr;
    grid-gap: 1rem 1rem;

    h1 {
      font-size: 3.6em;
    }

    > .project__description {
      margin-top: 6.25em;
    }
  }
`;

export {
  ProjectStyles,
};
