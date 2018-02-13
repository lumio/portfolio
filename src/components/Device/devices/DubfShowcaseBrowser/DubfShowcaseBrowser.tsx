import * as React from 'react';
import { DevicePropsType } from '../../types';
import { DubfShowcaseBrowserStyles } from './styles';
const starUrl = require( './star.svg' );

const DubfShowcaseBrowser : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    const isInView = props.scrollPercent > .75 && props.scrollPercent < 2;
    return (
      <DubfShowcaseBrowserStyles isInView={ isInView }>
        <img className='dubf__star' src={ starUrl } alt='' />

        <div className='dubf__poster'>
          <h2>The Movie</h2>
          <h3>with Ano Nymous</h3>
        </div>
      </DubfShowcaseBrowserStyles>
    );
  };

export default DubfShowcaseBrowser;
