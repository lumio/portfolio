import styled from 'styled-components';

const DeviceContainerStyles = styled.div`
  position: relative;
  width: 100%;
  height: 70vw;
  margin-bottom: 4rem;

  ${ ( props ) => props.theme.media.tablet } {
    height: 50rem;
  }
`;

export { DeviceContainerStyles };
