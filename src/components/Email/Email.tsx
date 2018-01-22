import * as React from 'react';
import { EmailPropsType } from './types';
import { convertFakeEmailAddress } from './helpers';

const Email : React.StatelessComponent<EmailPropsType> = ( props : EmailPropsType ) => {
  if ( !props.mail ) {
    return null;
  }

  const convertedMail = convertFakeEmailAddress( props.mail );
  return <a href={ `mailto:${ convertedMail }` }>{ convertedMail }</a>;
};

export default Email;
