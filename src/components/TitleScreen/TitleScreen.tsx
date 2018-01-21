import * as React from 'react';
import { TitleScreenPropsType } from './types';
import SectionStyles from '../../globals/styles/SectionStyles';

const TitleScreen : React.StatelessComponent<TitleScreenPropsType> =
  ( props : TitleScreenPropsType ) => {
    return (
      <SectionStyles>
        <pre>{ JSON.stringify( props, null, 2 ) }</pre>
      </SectionStyles>
    );
  };

export default TitleScreen;
