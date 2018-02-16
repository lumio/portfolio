import styled from 'styled-components';

const ProjectStyles = styled.section`
  ${ ( props : any ) => '' }
  display: flex;
  flex-direction: column;
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
    display: grid;
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

  body.browser-msie-le-11 & {
    display: block;

    > .project__title {
      position: absolute;
      left: 35%;
      top: 0;
      width: 65%;
    }

    > .project__description {
      width: 30%;
      margin-top: 14rem;
    }

    > .project__showcase {
      position: absolute;
      right: 0;
      top: 16rem;
      width: 65%;
    }
  }
`;

export {
  ProjectStyles,
};
