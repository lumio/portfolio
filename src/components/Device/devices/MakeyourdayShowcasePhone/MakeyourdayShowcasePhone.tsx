import * as React from 'react';
import { DevicePropsType } from '../../types';
const screenshotUrl = require( './screenshot.jpg' );

const DubfShowcasePhone : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <div><img src={ screenshotUrl } alt='Dubf Almighty' /></div>
    );
  };

export default DubfShowcasePhone;
