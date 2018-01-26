import * as React from 'react';
import SectionStyles from '../../common/styles/SectionStyles';
import { ProjectPropsType } from './types';

const Project : React.StatelessComponent<any> = ( props : ProjectPropsType ) => {
  return (
    <SectionStyles>
      <pre>{ JSON.stringify( props, null, 2 ) }</pre>
    </SectionStyles>
  );
};

export default Project;
