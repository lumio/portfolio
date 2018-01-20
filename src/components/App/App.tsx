import * as React from 'react';
import * as yaml from 'js-yaml';

import { AppStateType } from './types';
import ErrorBoundary from '../ErrorBoundary';
import SectionContainer from '../SectionContainer';

class App extends React.Component<{}, AppStateType> {
  constructor( props : {} ) {
    super( props );

    this.state = {
      pending: true,
      error: false,
      data: {},
    };

    this.loadContent();
  }

  loadContent() {
    fetch( './content.yml' )
      .then( ( response ) => response.text() )
      .then( ( data ) => yaml.safeLoad( data ) )
      .then( ( result ) => this.setState( {
        pending: false,
        data: result,
      } ) )
      .catch( ( err ) => {
        if ( !process || !process.env || process.env.NODE_ENV !== 'test' ) {
          // tslint:disable-next-line
          console.error( err );
        }
        this.setState( {
          pending: false,
          error: true,
        } );
      } );
  }

  renderPending() {
    return (
      <div>Pending</div>
    );
  }

  renderError() {
    return (
      <div><strong>error</strong></div>
    );
  }

  render() {
    if ( this.state.pending ) {
      return this.renderPending();
    }

    if ( this.state.error || !this.state.data ) {
      return this.renderError();
    }

    return (
      <ErrorBoundary>
        <SectionContainer sections={ this.state.data } />
      </ErrorBoundary>
    );
  }
}

export default App;
