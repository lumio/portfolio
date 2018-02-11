import * as React from 'react';
import { DevicePropsType } from '../../types';
import { WallboardShowcaseStyles } from './styles';
const screenshotUrl = require( './screenshot.jpg' );

import { convertScale } from '../../../../common/helpers';

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
        <img src={ screenshotUrl } alt='Wallboard' />
      </WallboardShowcaseStyles>
    );
  };

export default WallboardShowcase;
