import * as React from 'react';
import { DevicePropsType } from '../../types';
const screenshotUrl = require( './screenshot.jpg' );

const YwamShowcasePhone : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <div><img src={ screenshotUrl } alt='Ywam Soroti' /></div>
    );
  };

export default YwamShowcasePhone;
