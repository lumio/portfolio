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
        <Markdown
          className='project__title'
          source={ `# ${ project.title }` }
        />
        <Markdown
          className='project__description'
          source={ concatParts( project ) }
        />
        <DeviceContainer
          className='project__showcase'
          devices={ project.devices }
        />
      </ProjectStyles>
    </SectionStyles>
  );
};

export default Project;
