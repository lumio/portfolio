import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { MarkdownPropsType } from './types';

const Markdown : React.StatelessComponent<MarkdownPropsType> = ( props : MarkdownPropsType ) => {
  if ( !props.source ) {
    return null;
  }

  return <ReactMarkdown source={ props.source } />;
};

export default Markdown;
