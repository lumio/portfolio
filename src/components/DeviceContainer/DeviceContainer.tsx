import * as React from 'react';
import { DeviceContainerPropsType } from './types';
import { DeviceContainerStyles } from './styles';
import Device from '../Device';
import DeviceBordersHOC from '../DeviceBorders';

const DeviceContainer : React.StatelessComponent<DeviceContainerPropsType> =
  ( props : DeviceContainerPropsType ) => {
    if ( !props.devices ) {
      return null;
    }

    return (
      <DeviceContainerStyles className={ props.className }>
        { Object.keys( props.devices ).map( ( deviceType : string ) => {
          const device = props.devices[ deviceType ];
          const DeviceBordersElement = DeviceBordersHOC( deviceType, device.element );
          return (
            <DeviceBordersElement key={ deviceType } addressBar={ device.addressBar }>
              <Device device={ device } />
            </DeviceBordersElement>
          );
        } ) }
      </DeviceContainerStyles>
    );
  };

export default DeviceContainer;
