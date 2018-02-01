import styled from 'styled-components';

const TitleScreenStyles = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    text-align: right;
    margin-top: -10vh;
  }

  ul {
    list-style: none;
  }

  h1 {
    font-size: 14vmin;
    font-weight: normal;
    line-height: 1;
  }

  &, h2 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  ${ ( props : any ) => props.theme.media.tablet } {
    div {
      margin-top: -3rem;
    }

    h1 {
      font-size: 7rem;
    }

    &, h2 {
      font-size: 2rem;
    }
  }
`;

export {
  TitleScreenStyles,
};
