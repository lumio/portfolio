import * as React from 'react';
import SectionStyles from '../../common/styles/SectionStyles';
import Markdown from '../Markdown';
import { ProjectPropsType } from './types';
import { concatParts } from './helpers';

const Project : React.StatelessComponent<any> = ( props : ProjectPropsType ) => {
  const { project } = props;
  return (
    <SectionStyles>
      <Markdown source={ concatParts( project ) } />
    </SectionStyles>
  );
};

export default Project;
