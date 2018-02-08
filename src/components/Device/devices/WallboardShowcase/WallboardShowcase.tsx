import * as React from 'react';
import { DevicePropsType } from '../../types';
import { WallboardShowcaseStyles } from './styles';
const screenshotUrl = require( './screenshot.jpg' );

const WallboardShowcase : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <WallboardShowcaseStyles>
        <img src={ screenshotUrl } alt='Wallboard' />
      </WallboardShowcaseStyles>
    );
  };

export default WallboardShowcase;
