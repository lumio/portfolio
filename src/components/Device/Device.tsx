import * as React from 'react';
import deviceList from './devices';
import { DevicePropsType } from './types';

const DeviceHOC = ( deviceType : string, deviceElement : string ) => {
  if ( deviceList[ deviceElement ] ) {
    return deviceList[ deviceElement ];
  }

  return ( props : DevicePropsType ) => (
    <p><strong>Error! Cannot find { deviceElement }</strong></p>
  );
};

export default DeviceHOC;
