import * as React from 'react';
import { DevicePropsType } from '../../types';
import { DubfShowcasePhoneStyles } from './styles';

const DubfShowcasePhone : React.StatelessComponent<DevicePropsType> =
  ( props : DevicePropsType ) => {
    const isInView = props.scrollPercent > .75 && props.scrollPercent < 2;
    return (
      <DubfShowcasePhoneStyles isInView={ isInView }>
        <div className='dubf__intro'>
          What do you want Dubf Almighty to decide on?
        </div>
        <div className='dubf__option-container'>
          <span className='dubf__option'>Movie</span>
          <span className='dubf__option'>TV Show</span>
        </div>
      </DubfShowcasePhoneStyles>
    );
  };

export default DubfShowcasePhone;
