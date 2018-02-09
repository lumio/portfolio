import * as React from 'react';
import { DevicePropsType } from '../../types';
import { MakeyourdayShowcaseBrowserStyles } from './styles';

const MakeyourdayShowcaseBrowser : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <MakeyourdayShowcaseBrowserStyles />
    );
  };

export default MakeyourdayShowcaseBrowser;
