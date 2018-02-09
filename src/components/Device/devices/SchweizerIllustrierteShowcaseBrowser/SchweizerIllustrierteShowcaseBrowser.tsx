import * as React from 'react';
import { DevicePropsType } from '../../types';
const screenshotUrl = require( './screenshot.jpg' );

const SchweizerIllustrierteShowcaseBrowser : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    return (
      <div><img src={ screenshotUrl } /></div>
    );
  };

export default SchweizerIllustrierteShowcaseBrowser;
