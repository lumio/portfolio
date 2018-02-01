import styled from 'styled-components';

const DeviceBordersPhoneStyles = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 0;
  transform: scale( .7 );

  width: 50vmin;
  height: 90vmin;
  padding: 12vmin 2vmin;

  border: 1px solid #ccc;
  border-radius: 5vmin;
  background: #e9e8e4;
  background: linear-gradient( to bottom, #f2f3f4 0%, #d6d8db 100% );
  box-shadow: 0 0 1rem rgba( 0, 0, 0, .15 );

  &::before {
    content: '';

    display: block;
    position: absolute;
    left: 50%;
    top: 7vmin;
    margin-left: -4.5vmin;

    width: 9vmin;
    height: 2vmin;

    background: #ced1d4;
    border: 1px solid #b9bcc0;
    border-radius: 2vmin;
  }

  &::after {
    content: '';

    display: block;
    position: absolute;
    left: 50%;
    bottom: 1.75vmin;
    margin-left: -4.25vmin;

    width: 8.5vmin;
    height: 8.5vmin;

    background: #ccc;
    border: 1px solid #b3b3b3;
    border-radius: 5vmin;
  }

  .device-borders__inner {
    background: #fff;
    height: 100%;
    border: 1px solid #d7d7d7;
    overflow: hidden;
  }
`;

export { DeviceBordersPhoneStyles };
