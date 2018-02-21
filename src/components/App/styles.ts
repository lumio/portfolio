import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  from {
    opacity: .6;
    filter: blur( .05rem );
    transform: scale( .9 );
  }
  to {
    opacity: 1;
    filter: blur( 0 );
    transform: scale( 1.1 );
  }
`;

const AppLoadingStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  & > span {
    font-size: 1.8rem;
    animation: ${ pulsate } 1.5s ease infinite alternate;
  }
`;

export { AppLoadingStyles };
