import styled from 'styled-components';
import { DubfShowcasePhoneStylesPropsType } from './types';

const DubfShowcasePhoneStyles = styled.div`
  ${ ( props : DubfShowcasePhoneStylesPropsType ) => '' }
  width: 100%;
  height: 100%;
  padding: 3rem 2rem 2rem;

  .dubf__intro {
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .dubf__option-container {
    box-shadow: ${ ( props ) => props.isInView ?
      '1.5rem 1.5rem 0 rgba( 0, 0, 0, .2 )' : 'none' };
    transform:
      ${ ( props ) => props.isInView ?
        'none' : 'translate( 1.5rem, 1.5rem )' };
    width: 100%;
    transition: box-shadow 1s ease, transform 1s ease;
  }

  .dubf__option {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 8rem;

    color: #fff;
    background: #e30e20;
    font-weight: 600;
    text-shadow: .2rem .2rem 0 #000;
  }

  .dubf__option:last-child {
    background: #d60d1f;
  }
`;

export { DubfShowcasePhoneStyles };
