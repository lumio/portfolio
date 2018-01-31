import * as React from 'react';
import { DeviceBordersPropsType } from '../types';

const DeviceBordersPhone : React.StatelessComponent<DeviceBordersPropsType> =
  ( props : DeviceBordersPropsType ) => {
    return (
      <div>Phone ({ props.addressBar }) { props.children }</div>
    );
  };

export default DeviceBordersPhone;
