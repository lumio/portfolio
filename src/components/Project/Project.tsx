import * as React from 'react';
import SectionStyles from '../../common/styles/SectionStyles';
import Markdown from '../Markdown';
import DeviceContainer from '../DeviceContainer';

import { ProjectStyles } from './styles';
import { ProjectPropsType } from './types';
import { concatParts } from './helpers';

const Project : React.StatelessComponent<any> = ( props : ProjectPropsType ) => {
  const { project } = props;

  return (
    <SectionStyles>
      <ProjectStyles>
        <Markdown source={ concatParts( project ) } />
        <DeviceContainer devices={ project.devices } />
      </ProjectStyles>
    </SectionStyles>
  );
};

export default Project;
