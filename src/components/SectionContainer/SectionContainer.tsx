import * as React from 'react';
import { SectionContainerPropsType } from './types';
import TitleScreen from '../TitleScreen';
import ProjectsContainer from '../ProjectsContainer';

const sectionMap = {
  titlescreen: TitleScreen,
  projects: ProjectsContainer,
};

const SectionContainer : React.StatelessComponent<SectionContainerPropsType> =
  ( props : SectionContainerPropsType ) => {
    const sectionTypes = Object.keys( props.sections );
    return (
      <div>
        { sectionTypes.map( ( typeName ) => {
          if ( !sectionMap[ typeName ] ) {
            throw new Error( `Unknown section type ${ typeName }` );
          }

          const MappedSection = sectionMap[ typeName ];
          return (
            <MappedSection
              key={ typeName }
              data={ props.sections[ typeName ] }
            />
          );
        } ) }
      </div>
    );
  };

export default SectionContainer;
