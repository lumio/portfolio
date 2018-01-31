import * as React from 'react';
import { DevicePropsType } from './types';

const DeviceHOC = ( deviceType : string, deviceElement : string ) => {
  return ( props : DevicePropsType ) => {
    return (
      <div>Device { deviceType } { deviceElement }</div>
    );
  };
};

export default DeviceHOC;
