import * as React from 'react';
import { DeviceBordersPropsType } from '../types';
import { DeviceBordersBrowserStyles } from './styles';

const DeviceBordersBrowser : React.StatelessComponent<DeviceBordersPropsType> =
  ( props : DeviceBordersPropsType ) => {
    return (
      <DeviceBordersBrowserStyles>
        <div className='device-borders__title'>
          <span className='device-borders__ctrl device-borders__ctrl--red' />
          <span className='device-borders__ctrl device-borders__ctrl--yellow' />
          <span className='device-borders__ctrl device-borders__ctrl--green' />
        </div>
        <address className='device-borders__addressbar'>
          <span><a href={ props.addressBar }>{ props.addressBar }</a></span>
        </address>

        { props.children }
      </DeviceBordersBrowserStyles>
    );
  };

export default DeviceBordersBrowser;
