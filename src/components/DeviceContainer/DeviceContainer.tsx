import * as React from 'react';
import { DeviceContainerPropsType } from './types';
import DeviceHOC from '../Device';

const DeviceContainer : React.StatelessComponent<DeviceContainerPropsType> =
  ( props : DeviceContainerPropsType ) => {
    if ( !props.devices ) {
      return null;
    }

    return (
      <div>
        { Object.keys( props.devices ).map( ( deviceType : string ) => {
          const device = props.devices[ deviceType ];
          const DeviceElement = DeviceHOC( deviceType, device.element );
          return <DeviceElement key={ deviceType } device={ device } />;
        } ) }
      </div>
    );
  };

export default DeviceContainer;
