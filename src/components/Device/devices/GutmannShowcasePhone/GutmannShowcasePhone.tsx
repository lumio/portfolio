import * as React from 'react';
import { DevicePropsType } from '../../types';
const screenshotUrl = require( './screenshot.jpg' );

const GutmannShowcasePhone : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <div><img src={ screenshotUrl } alt='Gutmann' /></div>
    );
  };

export default GutmannShowcasePhone;
