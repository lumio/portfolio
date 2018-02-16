import styled from 'styled-components';
import { DubfShowcasePhoneStylesPropsType } from './types';

const DubfShowcasePhoneStyles = styled.div`
  ${ ( props : DubfShowcasePhoneStylesPropsType ) => '' }
  width: 100%;
  height: 100%;
  padding: 1rem .5rem .5rem;
  font-size: 8px;
  line-height: 1;

  .dubf__intro {
    text-align: center;
    font-weight: 600;
    margin-bottom: .5rem;

    ${ ( props ) => props.theme.media.tablet } {
      margin-bottom: 1rem;
    }
  }

  .dubf__option-container {
    box-shadow: ${ ( props ) => props.isInView ?
      '.3rem .3rem 0 rgba( 0, 0, 0, .2 )' : 'none' };
    transform:
      ${ ( props ) => props.isInView ?
        'none' : 'translate( .3rem, .3rem )' };
    width: 100%;
    transition: box-shadow 1s ease, transform 1s ease;

    ${ ( props ) => props.theme.media.tablet } {
      box-shadow: ${ ( props ) => props.isInView ?
        '1.5rem 1.5rem 0 rgba( 0, 0, 0, .2 )' : 'none' };
      transform:
        ${ ( props ) => props.isInView ?
          'none' : 'translate( 1.5rem, 1.5rem )' };
    }
  }

  .dubf__option {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 3.2rem;

    color: #fff;
    background: #e30e20;
    font-weight: 600;
    text-shadow: .2rem .2rem 0 #000;

    ${ ( props ) => props.theme.media.tablet } {
      min-height: 8rem;
    }
  }

  .dubf__option:last-child {
    background: #d60d1f;
  }

  ${ ( props ) => props.theme.media.tablet } {
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 3rem 2rem 2rem;
  }

  body.browser-msie-le-11 & {
    .dubf__option {
      display: block;
      min-height: inherit;
      line-height: 9rem;
      text-align: center;
    }
  }
`;

export { DubfShowcasePhoneStyles };
