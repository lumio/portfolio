import * as helpers from './helpers';

describe( 'Helpers', () => {
  it( 'should strip protocol', () => {
    expect( helpers.trimProtocol( 'http://example.org' ) )
      .toBe( 'example.org' );
    expect( helpers.trimProtocol( 'https://example.org/subfolder' ) )
      .toBe( 'example.org/subfolder' );
  } );

  it( 'should convert URL to anchor', () => {
    expect( helpers.convertUrlToLink( 'text with https://example.org/url' ) )
      .toBe( 'text with <a href="https://example.org/url">example.org/url</a>' );
  } );

  it( 'should convert URL to anchor and mark its protocol', () => {
    expect( helpers.convertUrlToLink( 'text with https://example.org/url', true ) )
      .toBe( 'text with <a href="https://example.org/url">https://example.org/url</a>' );
    expect( helpers.convertUrlToLink( 'text with http://example.org/url', true, true ) )
      .toBe( 'text with <a href="http://example.org/url"><i>http://</i>example.org/url</a>' );
  } );

  it( 'should scale numbers to a different one', () => {
    expect( helpers.convertScale( .5, [ 0, 1 ], [ 0, 100 ] ) ).toBe( 50 );
    expect( helpers.convertScale( .5, [ -1, 1 ], [ 0, 100 ] ) ).toBe( 75 );
    expect( helpers.convertScale( 0, [ -200, 200 ], [ 0, 100 ] ) ).toBe( 50 );
  } );

  it( 'should scale numbers and invert output', () => {
    expect( helpers.convertScale( 100, [ 200, -200 ], [ 0, 100 ] ) ).toBe( 25 );
    expect( helpers.convertScale( -100, [ 200, -200 ], [ 0, 100 ] ) ).toBe( 75 );
  } );
} );
