import * as React from 'react';
import { DevicePropsType } from '../../types';
const screenshotUrl = require( './screenshot.jpg' );

const SchweizerIllustrierteShowcasePhone : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <div><img src={ screenshotUrl } alt='Schweizer Illustrierte' /></div>
    );
  };

export default SchweizerIllustrierteShowcasePhone;
