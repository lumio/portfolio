const trimProtocol = ( url : string ) => {
  return url.replace( /^http(s)?\:\/\//, '' );
};

export {
  trimProtocol,
};
