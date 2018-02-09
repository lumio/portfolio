import * as React from 'react';
import { DevicePropsType } from '../../types';
import { DubfShowcaseBrowserStyles } from './styles';

const WaveBlockShowcase : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <DubfShowcaseBrowserStyles />
    );
  };

export default WaveBlockShowcase;
