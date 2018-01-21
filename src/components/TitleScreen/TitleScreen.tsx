import * as React from 'react';
import { TitleScreenPropsType } from './types';

const TitleScreen : React.StatelessComponent<TitleScreenPropsType> =
  ( props : TitleScreenPropsType ) => {
    return <pre>{ JSON.stringify( props, null, 2 ) }</pre>;
  };

export default TitleScreen;
