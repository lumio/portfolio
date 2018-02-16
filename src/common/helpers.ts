// Array.from polyfill
if ( !Array.from ) {
  Array.from = ( object : any ) => {
    'use strict';
    return [].slice.call( object );
  };
}

const getBrowserClassName = () => {
  const ua = navigator.userAgent;
  let version;
  let match = ua.match( /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i ) || [];

  if ( /trident/i.test( match[ 1 ] ) ){
    version = /\brv[ :]+(\d+)/g.exec( ua ) || [];
    const versionNumber = +( version[ 1 ] || 0 );
    const versionLowerEqual11 = versionNumber <= 11 ? ' browser-msie-le-11' : '';
    return `browser-msie-${ versionNumber }${ versionLowerEqual11 }`;
  }

  if ( match[ 1 ] === 'Chrome' ){
    version = ua.match( /\b(OPR|Edge)\/(\d+)/ );
    if ( version != null ) {
      return 'browser-' + version
        .slice( 1 )
        .join( '-' )
        .replace( 'OPR', 'Opera' )
        .toLowerCase();
    }
  }

  match = match[ 2 ]
    ? [ match[ 1 ], match[ 2 ] ]
    : [ navigator.appName, navigator.appVersion, '-?' ];
  version = ua.match( /version\/(\d+)/i );
  if ( version !== null ) {
    match.splice( 1, 1, version[ 1 ] );
  }

  return 'browser-' + match.join( '-' ).toLowerCase();
};

const addBrowserClassName = () => {
  const className = getBrowserClassName();
  const body = document.querySelector( 'body' );
  if ( body ) {
    body.className = className;
  }
};

const trimProtocol = ( url : string ) => {
  return url.replace( /^http(s)?\:\/\//, '' );
};

const convertUrlToLink = ( content : string, keepProtocol : boolean = false, tagProtocol : boolean = false ) => {
  const replacementString =
    `<a href="$1$2">${ keepProtocol ? (
      tagProtocol ? '<i>$1</i>' : '$1'
    ) : '' }$2</a>`;

  return content.replace(
    /(http[s]?:\/\/)([^\s]+)/,
    replacementString
  );
};

const convertScale = (
  input : number,
  inputScale : [ number, number ],
  outputScale : [ number, number ],
  trim : boolean = false
) : number => {
  const inBase = input - inputScale[ 0 ];
  const inMax = inputScale[ 1 ] - inputScale[ 0 ];
  const percentage = inBase / inMax;

  const outMax = outputScale[ 1 ] - outputScale[ 0 ];
  const result = percentage * outMax + outputScale[ 0 ];

  if ( trim ) {
    const min = Math.min.apply( null, outputScale );
    const max = Math.max.apply( null, outputScale );

    return Math.max(
      Math.min( max, result ),
      min
    );
  }

  return result;
};

export {
  addBrowserClassName,
  trimProtocol,
  convertUrlToLink,
  convertScale,
};
