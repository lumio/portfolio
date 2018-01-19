import * as React from 'react';

import { ErrorBoundaryStateType } from './types';

class ErrorBoundary extends React.Component<any, ErrorBoundaryStateType> {
  constructor( props : any ) {
    super( props );
    this.state = { error: null };
  }

  componentDidCatch( error : any ) {
    this.setState( {
      error,
    } );
  }

  render() {
    if ( this.state.error ) {
      return (
        <div>
          <h1>Ooops!</h1>
          <h2>Something went wrong</h2>
          <pre>{ this.state.error.toString() }</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
