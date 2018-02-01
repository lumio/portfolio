import * as React from 'react';
import { DeviceBordersPropsType } from '../types';
import { DeviceBordersPhoneStyles } from './styles';

const DeviceBordersPhone : React.StatelessComponent<DeviceBordersPropsType> =
  ( props : DeviceBordersPropsType ) => {
    return (
      <DeviceBordersPhoneStyles>
        <div className='device-borders__inner'>
          { props.children }
        </div>
      </DeviceBordersPhoneStyles>
    );
  };

export default DeviceBordersPhone;
