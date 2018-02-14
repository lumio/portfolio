import * as React from 'react';
import { debounce } from 'lodash';
import { polyfill as smoothscroll } from 'smoothscroll-polyfill';
import { ScrollerPropsType } from './types';

smoothscroll();

class Scroller extends React.Component<ScrollerPropsType, {}> {
  isComponentMounted : boolean = false;
  touchStartPos : number = 0;
  touchStartTime : number = 0;
  domElements : any[] = [];
  currentSection : number = 0;

  onResizeEvent = debounce( () => {
    if ( !this.isComponentMounted ) {
      return;
    }

    // TODO: make this check against the tablet media query
    if ( Math.max( document.documentElement.clientWidth, window.innerWidth ) < 500 ) {
      this.scrollToCurrentSection();
    }
  }, 500 );

  constructor( props : ScrollerPropsType ) {
    super( props );
  }

  componentDidMount() {
    this.isComponentMounted = true;
    window.addEventListener( 'touchstart', this.onTouchStartEvent, { passive: false } );
    window.addEventListener( 'touchend', this.onTouchEndEvent, { passive: false } );
    window.addEventListener( 'resize', this.onResizeEvent );

    // We don't need to rerender the component tree.
    this.domElements = Array.from( document.querySelectorAll( '.project' ) );
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
    window.removeEventListener( 'touchstart', this.onTouchStartEvent );
    window.removeEventListener( 'touchend', this.onTouchEndEvent );
    window.removeEventListener( 'resize', this.onResizeEvent );
  }

  setNextSection( numericDirection : number ) {
    const sectionCount = this.domElements.length;
    const currentSection = Math.max(
      0,
      Math.min(
        sectionCount,
        this.currentSection + numericDirection
      )
    );
    this.currentSection = currentSection;
  }

  scrollToCurrentSection() {
    if ( this.currentSection === 0 ) {
      return this.scrollToPos( 0 );
    }

    const bodyRect = document.body.getBoundingClientRect();
    const elementRect = this.domElements[ this.currentSection - 1 ].getBoundingClientRect();
    this.scrollToPos( elementRect.top - bodyRect.top );
  }

  scrollToPos( pos : number ) {
    window.scroll( {
      left: 0,
      top: pos,
      behavior: 'smooth',
    } );
  }

  onTouchStartEvent = ( evt : any ) => {
    if ( evt.target.nodeName === 'A' ) {
      return;
    }
    const touch = evt.changedTouches[ 0 ];
    const y = Math.max( touch.clientY, touch.pageY );
    this.touchStartPos = y;
    this.touchStartTime = Date.now();

    evt.preventDefault();
  }

  onTouchEndEvent = ( evt : any ) => {
    if ( evt.target.nodeName === 'A' ) {
      return;
    }

    const now = Date.now();
    if ( now - this.touchStartTime > 1500 ) {
      return;
    }

    const touch = evt.changedTouches[ 0 ];
    const y = Math.max( touch.clientY, touch.pageY );
    const nextSection = ( y - this.touchStartPos ) < 0;
    this.setNextSection( nextSection ? 1 : -1 );
    this.scrollToCurrentSection();
  }

  render() {
    return this.props.children;
  }
}

export default Scroller;
