const conversionTable = {
  dot: '.',
  at: '@',
};
const conversionCache = {};
const conversionRegex = new RegExp(
  '(\\s*\\[(' + Object.keys( conversionTable ).join( '|' ) + ')\\]\\s*)',
  'ig'
);

const convertFakeEmailAddress = ( fakeMail : string ) : string => {
  if ( conversionCache[ fakeMail ] ) {
    return conversionCache[ fakeMail ];
  }

  conversionCache[ fakeMail ] = fakeMail.replace( conversionRegex, ( _match, _m1, m2 ) => {
    if ( conversionTable[ m2 ] ) {
      return conversionTable[ m2 ];
    }

    return '';
  } );
  return conversionCache[ fakeMail ];
};

export {
  convertFakeEmailAddress,
};
