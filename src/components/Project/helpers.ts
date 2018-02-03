import { ProjectType } from './types';

const partTransforms = {
  description: {},
  released: {
    prefix: 'Released in  \n**',
    suffix: '**',
  },
  role: {
    prefix: 'Project role  \n**',
    suffix: '**',
  },
  employer: {
    prefix: 'Employer  \n**',
    suffix: '**',
  },
  url: {
    prefix: 'URL  \n**',
    suffix: '**',
  },
  packageUrl: {
    prefix: 'Package URL  \n**',
    suffix: '**',
  },
  repository: {
    prefix: 'Repository  \n**',
    suffix: '**',
  },
};

const stripProtocolFromUrls = ( raw : string | number ) => {
  return String( raw ).replace( /(http[s]?:\/\/([^\s]+))/g, '[$2]($1)' );
};

const concatParts = ( project : ProjectType ) => {
  const collection = [];

  const partOrder = Object.keys( partTransforms );
  for ( const part of partOrder ) {
    if ( project[ part ] ) {
      const prefix = partTransforms[ part ] && partTransforms[ part ].prefix || '';
      const suffix = partTransforms[ part ] && partTransforms[ part ].suffix || '';
      collection.push(
        `${ prefix }${ stripProtocolFromUrls( project[ part ] ) }${ suffix }`
      );
    }
  }

  return collection.join( '\n\n' );
};

export {
  concatParts,
};
