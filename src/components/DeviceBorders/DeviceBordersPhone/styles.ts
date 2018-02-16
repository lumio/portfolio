import styled from 'styled-components';

const DeviceBordersPhoneStyles = styled.div`
  position: absolute;
  right: 4vw;
  bottom: -2rem;
  z-index: 200;

  ${ ( props ) => props.theme.media.tablet } {
    bottom: 6rem;
  }

  width: 27.5vmin;
  height: 52.25vmin;
  padding: 6.6vmin 1.1vmin;

  border: 1px solid #ccc;
  border-radius: 2.75vmin;
  background: #e9e8e4;
  background: linear-gradient( to bottom, #f2f3f4 0%, #d6d8db 100% );
  box-shadow: 0 0 1rem rgba( 0, 0, 0, .15 );

  img {
    width: 100%;
    height: auto;
  }

  &::before {
    content: '';

    display: block;
    position: absolute;
    left: 50%;
    top: 3.85vmin;
    margin-left: -2.475vmin;

    width: 4.95vmin;
    height: 1.1vmin;

    background: #ced1d4;
    border: 1px solid #b9bcc0;
    border-radius: 1.1vmin;
  }

  &::after {
    content: '';

    display: block;
    position: absolute;
    left: 50%;
    bottom: .9625vmin;
    margin-left: -2.3374vmin;

    width: 4.675vmin;
    height: 4.675vmin;

    background: #ccc;
    border: 1px solid #b3b3b3;
    border-radius: 2.75vmin;
  }

  .device-borders__inner {
    background: #fff;
    height: 100%;
    border: 1px solid #d7d7d7;
    overflow: hidden;
  }

  body.browser-msie-le-11 & {
    bottom: -2.5rem;
  }
`;

export { DeviceBordersPhoneStyles };
