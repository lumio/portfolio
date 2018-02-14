import styled from 'styled-components';
import { WallboardItemPropsType } from './types';

const WallboardShowcaseStyles = styled.div`
  color: #fff;
  background: #000;
  height: 100%;
  padding: 2rem;

  ${ ( props ) => props.theme.media.tablet } {
    padding: 4rem;
  }
`;

const WallboardItemStyles = styled.div`
  ${ ( props : WallboardItemPropsType ) => {
    const isActive = props.progress !== undefined && props.progress < 100;
    return `
      background: ${ isActive ? '#0ea830' : '#0a8326' };
      box-shadow: 0 .5rem 0 0 ${ isActive ? '#098527' : '#08681e' };

      .wallboard-item__header {
        position: relative;

        &__name {
          font-size: .8em;

          ${ props.theme.media.tablet } {
            font-size: 1em;
          }
        }

        &__name em {
          font-style: normal;
          margin-left: ${ isActive ? '-1.1em' : 0 };
          transition: margin-left .5s ease;
        }

        &__name::before {
          content: '✓';
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.1em;
          height: 1.1em;
          margin-right: .35em;
          transform: scale( ${ isActive ? 0 : 1 } );
          opacity: ${ isActive ? 0 : 1 };

          color: #06230f;
          background-color: #adf8bf;
          text-shadow: none;
          box-shadow:
            .1rem .1rem .125em rgba( 0, 0, 0, .25 ) inset,
            -.1rem -1rem 0 rgba( 255, 255, 255, .25 ) inset;
          font-size: .9em;
          border-radius: 50%;

          transition: transform .5s ease, opacity .5s;
        }

        &__percentage {
          padding-left: .5rem;
          font-size: .7em;
          opacity: ${ isActive ? .7 : 0 };
          transition: opacity .5s;

          ${ props.theme.media.tablet } {
            font-size: .8em;
          }
        }

        &__health {
          position: absolute;
          right: 0;
          top: 0;
          img {
            height: 1em;
            width: auto;
            margin-top: .2rem;

            ${ props.theme.media.tablet } {
              height: 1.3em;
              margin-top: 0;
            }
          }
        }
      }

      .wallboard-item__progress {
        opacity: ${ isActive ? 1 : 0 };
        margin-top: ${ isActive ? '.75rem' : 0 };
        height: ${ isActive ? '1.2rem' : 0 };
        background: #064f18;
        box-shadow:
          0 0 1.5rem rgba( 0, 0, 0, .25 ) inset,
          0 0 1rem rgba( 0, 0, 0, .1 );
        border-radius: .3rem;
        overflow: hidden;

        transition: opacity .5s, margin-top .5s ease, height .5s ease;

        &::before {
          content: '';
          display: block;
          background: #2fbd4f;
          height: 1.6rem;
          width: ${ props.progress }%;
          transition: width .25s ease;
        }

        ${ props.theme.media.tablet } {
          height: ${ isActive ? '1.6rem' : 0 };
        }
      }
    `;
  } }

  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: .25rem;
  text-shadow: .1rem .1rem .2rem rgba( 0, 0, 0, .4 );
  transition: background .5s, box-shadow .5s;

  ${ ( props ) => props.theme.media.tablet } {
    margin-bottom: 2rem;
    padding: 2rem;
    border-radius: .5rem;
  }
`;

export {
  WallboardShowcaseStyles,
  WallboardItemStyles,
};
