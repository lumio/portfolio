import styled from 'styled-components';

const DeviceBordersBrowserStyles = styled.div`
  width: 100%;
  height: 70vw;
  max-height: 45rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: .8rem;
  box-shadow: 0 0 1rem rgba( 0, 0, 0, .15 );
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }

  .device-borders__title {
    min-height: 2rem;
    padding: .1rem .6rem 0;
    background: #ececec;
    background: linear-gradient( to bottom, #ececec 0%, #e5e6e7 100% );
    border-bottom: 1px solid #d7d8d7;
  }

  .device-borders__ctrl {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: .5rem;
    background: #ccc;
    border: 1px solid #aaa;
    border-radius: .5rem;
  }

  .device-borders__ctrl--red {
    background: #f1635f;
    border-color: #c43735;
  }

  .device-borders__ctrl--yellow {
    background: #fcbd40;
    border-color: #ba882f;
  }

  .device-borders__ctrl--green {
    background: #50b84b;
    border-color: #229446;
  }

  .device-borders__addressbar {
    display: block;
    background: #f3f3f3;
    padding: .4rem;
    font-style: normal;
    font-size: 1rem;

    span {
      display: block;
      background: #fff;
      border: 1px solid #d7d7d7;
      border-radius: .5rem;
      padding: .3rem .4rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    a, a:link, a:hover {
      color: #000;
      text-decoration: none;
      background: none;
      font-weight: 700;
    }

    i {
      font-weight: 400;
      font-style: normal;
    }
  }

  ${ ( props ) => props.theme.media.tablet } {
    max-height: 50rem;
    .device-borders__title {
      min-height: 3rem;
      padding: .8rem 1.3rem;
    }

    .device-borders__ctrl {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: .6rem;
    }

    .device-borders__addressbar {
      padding: .7rem 1rem;
      font-size: 1.2rem;

      span {
        padding: .9rem 1.2rem;
        border-radius: .75rem;
      }
    }
  }
`;

export { DeviceBordersBrowserStyles };
