import styled from 'styled-components';
import { DubfShowcaseBrowserStylesPropsType } from './types';

const DubfShowcaseBrowserStyles = styled.div`
  ${ ( props : DubfShowcaseBrowserStylesPropsType ) => '' }
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img.dubf__star {
    position: absolute;
    width: 90%;
    left: ${ ( props ) => props.isInView ? '-20%' : '-100%' };
    bottom: ${ ( props ) => props.isInView ? '-32%' : '-100%' };
    z-index: 0;
    transform: ${ ( props ) =>
      props.isInView ?
        'rotate( 50deg )' : 'rotate( -180deg )'
    };
    opacity: .4;
    filter: blur( 2rem );
    transition:
      transform 1.5s ease,
      left 1.5s ease,
      bottom 1.5s ease;
  }

  .dubf__poster {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 15rem;
    z-index: 100;
    margin: -1rem 0 0 -15%;

    color: #000;
    background: linear-gradient( 135deg, #d26979 0%, #f5c156 100% );
    box-shadow:
      ${ ( props ) => props.isInView ?
        '1.25rem 1.25rem 0 rgba( 0, 0, 0, .2 )' : 'none' };
    transform:
      ${ ( props ) => props.isInView ?
        'none' : 'translate( 1.25rem, 1.25rem )' };
    text-align: center;
    transition: box-shadow 1s ease, transform 1s ease;

    h2, h3 {
      color: #fff;
      text-shadow: ${ ( props ) => props.isInView ?
          '.3rem .3rem .5rem rgba( 0, 0, 0, .75 )' : 'none' };
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: ${ ( props ) => props.isInView ? '3px' : 0 };
      transition: letter-spacing 2s .5s ease, text-shadow 2s .25s ease;
    }

    h2 {
      font-size: .8rem;
      margin: -1rem 0 .5rem;
    }

    h3 {
      font-size: 3px;
    }

    ${ ( props ) => props.theme.media.tablet } {
      width: 23rem;
      height: 35rem;

      box-shadow:
        ${ ( props ) => props.isInView ?
          '2.5rem 2.5rem 0 rgba( 0, 0, 0, .2 )' : 'none' };
      transform:
        ${ ( props ) => props.isInView ?
          'none' : 'translate( 2.5rem, 2.5rem )' };

      h2, h3 {
        letter-spacing: ${ ( props ) => props.isInView ? '.4rem' : 0 };
      }

      h2 {
        font-size: 2.5rem;
        margin: -2rem 0 1rem;
      }

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`;

export { DubfShowcaseBrowserStyles };
