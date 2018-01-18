import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App from './App';

const mockContent = `---
titlescreen:
  title: Portfolio
  subtitle: of Henry Ford
  mail: henry [dot] ford [at] example [dot] com
`

const mockResponse = ( status, statusText, response ) => {
  return new window.Response( response, {
    status,
    statusText,
    headers: {
      'Content-type': 'text/yaml',
    },
  } );
};

describe( 'App', () => {
  it( 'renders snapshot on data', ( done ) => {
    fetch.mockResponse( mockContent );

    const renderedApp = renderer.create( <App /> );
    expect( renderedApp.toJSON() ).toMatchSnapshot();
    setTimeout( () => {
      expect( renderedApp.toJSON() ).toMatchSnapshot();
      done();
    }, 100 );
  } );

  it( 'renders snapshot on error', ( done ) => {
    fetch.mockReject( new Error( 'some error' ) );

    const renderedApp = renderer.create( <App /> );
    expect( renderedApp.toJSON() ).toMatchSnapshot();
    setTimeout( () => {
      expect( renderedApp.toJSON() ).toMatchSnapshot();
      done();
    }, 100 );
  } );
} );
