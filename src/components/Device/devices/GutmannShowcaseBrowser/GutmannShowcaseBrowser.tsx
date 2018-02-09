import * as React from 'react';
import { DevicePropsType } from '../../types';
import { GutmannShowcaseBrowserStyles } from './styles';

const GutmannShowcaseBrowser : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <GutmannShowcaseBrowserStyles />
    );
  };

export default GutmannShowcaseBrowser;
