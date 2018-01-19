import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

const mockContent = `---
titlescreen:
  title: Portfolio
  subtitle: of Henry Ford
  mail: henry [dot] ford [at] example [dot] com
`;

describe( 'App', () => {
  it( 'renders snapshot on data', ( done ) => {
    // FIXME:
    ( fetch as any ).mockResponse( mockContent );

    const renderedApp = renderer.create( <App /> );
    expect( renderedApp.toJSON() ).toMatchSnapshot();
    setTimeout( () => {
      expect( renderedApp.toJSON() ).toMatchSnapshot();
      done();
    }, 100 );
  } );

  it( 'renders snapshot on error', ( done ) => {
    // FIXME:
    ( fetch as any ).mockReject( new Error( 'some error' ) );

    const renderedApp = renderer.create( <App /> );
    expect( renderedApp.toJSON() ).toMatchSnapshot();
    setTimeout( () => {
      // FIXME: renders error
      expect( renderedApp.toJSON() ).toMatchSnapshot();
      done();
    }, 100 );
  } );
} );
