import * as React from 'react';
import { WallboardItemPropsType } from './types';
import { WallboardItemStyles } from './styles';
const hearts = require( './hearts.svg' );

const WallboardItem : React.StatelessComponent<WallboardItemPropsType> =
  ( props : WallboardItemPropsType ) => (
    <WallboardItemStyles { ...props }>
      <div className='wallboard-item__header'>
        <span className='wallboard-item__header__name'>
          <em>{ props.name }</em>
        </span>
        <span className='wallboard-item__header__percentage'>({ props.progress }%)</span>
        <span className='wallboard-item__header__health'>
          <img src={ hearts } alt='' />
        </span>
      </div>
      <div className='wallboard-item__progress' />
    </WallboardItemStyles>
  );

export default WallboardItem;
