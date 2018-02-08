import * as React from 'react';
import SectionStyles from '../../common/styles/SectionStyles';
import Email from '../Email';
import { trimProtocol } from '../../common/helpers';

import { TitleScreenPropsType } from './types';
import { TitleScreenStyles } from './styles';

const TitleScreen : React.StatelessComponent<TitleScreenPropsType> =
  ( props : TitleScreenPropsType ) => {
    const { mail, github, repository } = props.data;
    const githubUrl = github && `https://github.com/${ github }`;
    const list = [
      mail ? <Email mail={ mail } /> : null,
      githubUrl ? <a href={ githubUrl }>{ trimProtocol( githubUrl ) }</a> : null,
    ];

    return (
      <SectionStyles>
        <TitleScreenStyles>
          <div>
            <h1>{ props.data.title }</h1>
            <h2>{ props.data.subtitle }</h2>
            <ul>
              { list.filter( ( item ) => item ).map( ( item, index ) => (
                <li key={ index }>{ item }</li>
              ) ) }
            </ul>
          </div>
          <footer>
            { repository ? (
              <a href={ repository }>🦄</a>
            ) : null }
          </footer>
        </TitleScreenStyles>
      </SectionStyles>
    );
  };

export default TitleScreen;
