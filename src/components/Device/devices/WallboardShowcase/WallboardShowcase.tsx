import * as React from 'react';
import { DevicePropsType } from '../../types';
import { WallboardShowcaseStyles } from './styles';

import { convertScale } from '../../../../common/helpers';
import WallboardItem from './WallboardItem';

const WallboardShowcase : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    const progress = Math.floor( convertScale(
      props.scrollPercent,
      [ 0, 1 ],
      [ 0, 100 ],
      true
    ) );

    return (
      <WallboardShowcaseStyles>
        <WallboardItem
          name='wallboard'
        />
        <WallboardItem
          name='wallboard-test'
          progress={ progress }
        />
      </WallboardShowcaseStyles>
    );
  };

export default WallboardShowcase;
