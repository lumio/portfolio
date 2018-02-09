import * as React from 'react';
import { DevicePropsType } from '../../types';
import { WaveBlockShowcaseBrowserStyles } from './styles';

const WaveBlockShowcase : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <WaveBlockShowcaseBrowserStyles />
    );
  };

export default WaveBlockShowcase;
