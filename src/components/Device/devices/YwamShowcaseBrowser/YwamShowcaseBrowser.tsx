import * as React from 'react';
import { DevicePropsType } from '../../types';
import { DubfShowcaseBrowserStyles } from './styles';

const DubfShowcaseBrowser : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <DubfShowcaseBrowserStyles />
    );
  };

export default DubfShowcaseBrowser;
