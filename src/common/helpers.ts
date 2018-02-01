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

export {
  trimProtocol,
  convertUrlToLink,
};
