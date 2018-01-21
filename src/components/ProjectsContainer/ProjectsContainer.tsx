import * as React from 'react';
import Project from '../Project';

import { ProjectsContainerPropsType } from './types';

class ProjectsContainer extends React.Component<ProjectsContainerPropsType, any> {
  render() {
    return (
        this.props.data.map( ( project ) => (
          <Project
            key={ project.title }
            project={ project }
          />
        ) )
    );
  }
}

export default ProjectsContainer;
