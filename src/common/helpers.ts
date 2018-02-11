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
  trimProtocol,
  convertUrlToLink,
  convertScale,
};
