import * as React from 'react';
import { DeviceBordersPropsType } from '../types';

const DeviceBordersBrowser : React.StatelessComponent<DeviceBordersPropsType> =
  ( props : DeviceBordersPropsType ) => {
    return (
      <div>Browser ({ props.addressBar }) { props.children }</div>
    );
  };

export default DeviceBordersBrowser;
