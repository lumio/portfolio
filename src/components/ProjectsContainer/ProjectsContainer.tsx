import * as React from 'react';
import Project from '../Project';
import { throttle } from 'lodash';

import {
  ProjectsContainerPropsType,
  ProjectsContainerStateType,
} from './types';

class ProjectsContainer extends React.Component<ProjectsContainerPropsType, ProjectsContainerStateType> {
  dom : HTMLElement | null;
  onScroll = throttle( ( evt? : any ) => {
    if ( !this.dom ) {
      return;
    }

    const boundingRect = this.dom.getBoundingClientRect();
    const scrollTop = boundingRect.top * -1;
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    this.setState( { scrollTop, viewportHeight } );
  }, 100 );

  constructor( props : ProjectsContainerPropsType ) {
    super( props );
    this.state = {
      scrollTop: 0,
      viewportHeight: 1,
    };
  }

  componentDidMount() {
    document.addEventListener( 'scroll', this.onScroll );
    document.addEventListener( 'resize', this.onScroll );
    this.onScroll();
  }

  componentWillUnmount() {
    document.removeEventListener( 'scroll', this.onScroll );
    document.removeEventListener( 'resize', this.onScroll );
  }

  render() {
    return (
      <div ref={ ( dom ) => this.dom = dom }>
        { this.props.data.map( ( project, index ) => (
          <Project
            key={ project.title }
            scrollTop={ this.state.scrollTop - ( this.state.viewportHeight * index ) }
            viewportHeight={ this.state.viewportHeight }
            project={ project }
          />
        ) ) }
      </div>
    );
  }
}

export default ProjectsContainer;
