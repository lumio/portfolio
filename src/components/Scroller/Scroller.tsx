import * as React from 'react';
import { debounce } from 'lodash';
import { polyfill as smoothscroll } from 'smoothscroll-polyfill';
import { ScrollerPropsType, ScrollerStateType } from './types';

smoothscroll();

class Scroller extends React.Component<ScrollerPropsType, ScrollerStateType> {
  isComponentMounted : boolean = false;
  touchStart : number = 0;

  onResizeEvent = debounce( () => {
    if ( !this.isComponentMounted ) {
      return;
    }

    this.recalculateContainerCount();
  }, 500 );

  constructor( props : ScrollerPropsType ) {
    super( props );
    this.state = {
      documentHeight: 1,
      viewportHeight: 1,
      sectionCount: 1,
      currentSection: 0,
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;
    window.addEventListener( 'touchstart', this.onTouchStartEvent, { passive: false } );
    window.addEventListener( 'touchend', this.onTouchEndEvent );
    window.addEventListener( 'resize', this.onResizeEvent );
    this.recalculateContainerCount();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
    window.removeEventListener( 'touchstart', this.onTouchStartEvent );
    window.removeEventListener( 'touchend', this.onTouchEndEvent );
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
      documentHeight,
      viewportHeight,
      sectionCount: Math.round( documentHeight / viewportHeight ),
    } );
  }

  scrollToSection( section : number ) {
    const currentSection = Math.max(
      0,
      Math.min( this.state.sectionCount - 1, section )
    );
    this.setState( {
      currentSection,
    } );
    window.scroll( {
      left: 0,
      top: currentSection * this.state.viewportHeight,
      behavior: 'smooth',
    } );
  }

  render() {
    return this.props.children;
  }

  onTouchStartEvent = ( evt : any ) => {
    const touch = evt.changedTouches[ 0 ];
    const y = Math.max( touch.clientY, touch.pageY );
    this.touchStart = y;
    evt.preventDefault();
  }

  onTouchEndEvent = ( evt : any ) => {
    const touch = evt.changedTouches[ 0 ];
    const y = Math.max( touch.clientY, touch.pageY );
    const nextSection = ( y - this.touchStart ) < 0;
    this.scrollToSection( this.state.currentSection + ( nextSection ? 1 : -1 ) );
  }

}

export default Scroller;
