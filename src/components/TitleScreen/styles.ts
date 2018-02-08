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
    font-weight: 500;
    line-height: 1;
  }

  &, h2 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  footer {
    position: absolute;
    right: 1.15em;
    bottom: 1em;

    > a {
      display: inline-flex;
      width: 4rem;
      height: 4rem;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      padding-right: .75rem;

      opacity: .5;
      transition: opacity .5s, transform .5s ease;

      &:hover {
        opacity: 1;
        transform: scale( 1.2 );
      }

      &:active {
        transform: scale( .9 );
        transition: transform .2s ease;
      }
    }
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
