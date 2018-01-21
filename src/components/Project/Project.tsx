import * as React from 'react';
import { ProjectPropsType } from './types';
import SectionStyles from '../../globals/styles/SectionStyles';

const Project : React.StatelessComponent<any> = ( props : ProjectPropsType ) => {
  return (
    <SectionStyles>
      <pre>{ JSON.stringify( props, null, 2 ) }</pre>
    </SectionStyles>
  );
};

export default Project;
