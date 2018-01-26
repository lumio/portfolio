import * as React from 'react';
import SectionStyles from '../../common/styles/SectionStyles';
import Email from '../Email';
import { trimProtocol } from '../../common/helpers';

import { TitleScreenPropsType } from './types';
import { TitleScreenStyles } from './styles';

const TitleScreen : React.StatelessComponent<TitleScreenPropsType> =
  ( props : TitleScreenPropsType ) => {
    const { mail, github } = props.data;
    const githubUrl = github && `https://github.com/${ github }`;
    const ElMail = mail ? <li><Email mail={ mail } /></li> : null;
    const ElGitHub = githubUrl ? (
      <li><a href={ githubUrl }>{ trimProtocol( githubUrl ) }</a></li>
    ) : null;

    return (
      <SectionStyles>
        <TitleScreenStyles>
          <div>
            <h1>{ props.data.title }</h1>
            <h2>{ props.data.subtitle }</h2>
            <ul>
              { ElMail }
              { ElGitHub }
            </ul>
          </div>
        </TitleScreenStyles>
      </SectionStyles>
    );
  };

export default TitleScreen;
