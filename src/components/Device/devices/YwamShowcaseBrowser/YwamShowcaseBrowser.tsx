import * as React from 'react';
import { DevicePropsType } from '../../types';
import { YwamShowcaseBrowserStyles } from './styles';

const YwamShowcaseBrowser : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <YwamShowcaseBrowserStyles />
    );
  };

export default YwamShowcaseBrowser;
