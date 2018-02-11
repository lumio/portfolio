import styled from 'styled-components';
import { WallboardItemPropsType } from './types';

const WallboardShowcaseStyles = styled.div`
  color: #fff;
  background: #000;
  height: 100%;
  padding: 4rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const WallboardItemStyles = styled.div`
  ${ ( props : WallboardItemPropsType ) => {
    const isActive = props.progress !== undefined && props.progress < 100;
    return `
      background: ${ isActive ? '#0ea830' : '#0a8326' };

      span {
        opacity: ${ isActive ? 1 : 0 };
        transition: opacity .5s;
      }
    `;
  } }

  transition: background .5s;
`;

export {
  WallboardShowcaseStyles,
  WallboardItemStyles,
};
