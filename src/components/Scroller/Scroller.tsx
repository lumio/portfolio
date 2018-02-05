import * as React from 'react';
import { debounce } from 'lodash';
import { ScrollerPropsType, ScrollerStateType } from './types';

class Scroller extends React.Component<ScrollerPropsType, ScrollerStateType> {
  isComponentMounted : boolean = false;

  onScrollEvent = debounce( () => {
    if ( !this.isComponentMounted ) {
      return;
    }

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const pagePos = scrollTop / this.state.viewportHeight;
    const prevSection = Math.floor( pagePos );
    const shouldBeNextSection = ( pagePos - prevSection ) > .5;
    const newSection = shouldBeNextSection ? prevSection + 1 : prevSection;
    window.scrollTo( 0, newSection * this.state.viewportHeight );
  }, 1000 );

  onResizeEvent = debounce( () => {
    if ( !this.isComponentMounted ) {
      return;
    }

    this.recalculateContainerCount();
  }, 500 );

  constructor( props : ScrollerPropsType ) {
    super( props );
    this.state = {
      currentSection: 0,
      sectionCount: 1,
      documentHeight: 1,
      viewportHeight: 1,
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;
    window.addEventListener( 'scroll', this.onScrollEvent );
    window.addEventListener( 'resize', this.onResizeEvent );
    this.recalculateContainerCount();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
    window.removeEventListener( 'scroll', this.onScrollEvent );
    window.removeEventListener( 'resize', this.onResizeEvent );
  }

  recalculateContainerCount() {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    this.setState( {
      sectionCount: Math.ceil( documentHeight / viewportHeight ),
      documentHeight,
      viewportHeight,
    } );
  }

  render() {
    return this.props.children;
  }
}

export default Scroller;
