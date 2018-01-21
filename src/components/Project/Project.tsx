import * as React from 'react';
import { ProjectPropsType } from './types';

const Project : React.StatelessComponent<any> = ( props : ProjectPropsType ) => {
  return <pre>{ JSON.stringify( props, null, 2 ) }</pre>;
};

export default Project;
