import * as React from 'react';
import deviceList from './devices';
import { DevicePropsType } from './types';

const Device : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    const DeviceElement = deviceList[ props.device.element ];
    if ( !DeviceElement ) {
      return (
        <p><strong>Error! Cannot find { props.device.element }</strong></p>
      );
    }

    return <DeviceElement { ...props } />;
  };

export default Device;
