import * as React from 'react';
import { DeviceBordersPropsType } from './types';
import { default as DeviceBrowser } from './DeviceBordersBrowser';
import { default as DevicePhone } from './DeviceBordersPhone';

const deviceTypeList = {
  DeviceBrowser,
  DevicePhone,
};

const DeviceBordersHOC = ( deviceType : string, deviceElement : string ) => {
  const capitalDeviceType = 'Device' +
    deviceType.charAt( 0 ).toUpperCase() + deviceType.slice( 1 );
  const DeviceBorders = deviceTypeList[ capitalDeviceType ];
  if ( !DeviceBorders ) {
    throw new Error( `Device type '${ deviceType }' not found as ${ capitalDeviceType } in deviceTypeList` );
  }

  return ( DeviceBorders as React.StatelessComponent<DeviceBordersPropsType> );
};

export default DeviceBordersHOC;
