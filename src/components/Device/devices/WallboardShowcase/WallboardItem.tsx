import * as React from 'react';
import { WallboardItemPropsType } from './types';
import { WallboardItemStyles } from './styles';

const WallboardItem : React.StatelessComponent<WallboardItemPropsType> =
  ( props : WallboardItemPropsType ) => (
    <WallboardItemStyles { ...props }>
      <div>{ props.name } <span>{ props.progress }</span></div>
    </WallboardItemStyles>
  );

export default WallboardItem;
