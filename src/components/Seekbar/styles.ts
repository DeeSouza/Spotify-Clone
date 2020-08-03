import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme.title === 'light'
      ? darken(0.07, props.theme.colors.background)
      : darken(0.06, props.theme.colors.background)};
  height: 120px;
  display: flex;
`;

export const CurrentMusic = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 280px;
  padding: 0px 0px 0px 35px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }

  .infoMusic {
    margin-left: 25px;
    font-size: 12px;

    strong {
      display: block;

      &.album {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  svg {
    justify-self: flex-end;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ControlsSeekBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;

    svg {
      margin: 0px 15px;
      vertical-align: middle;
      cursor: pointer;
      transition: all 0.25s ease-out;
      fill: ${(props) => props.theme.colors.icons};

      &:hover {
        fill: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const SeekbarMusic = styled.div`
  display: flex;
  max-width: 650px;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  strong {
    font-size: 12px;
    margin: 0 20px;
  }

  .bar {
    width: 100%;
    flex: 1;
    background-color: #333;
    height: 5px;
    border-radius: 2px;

    div {
      height: 100%;
      width: 40%;
      background-color: ${(props) => props.theme.colors.primary};
      position: relative;

      &:after {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.primary};
        position: absolute;
        right: -5px;
        top: -2.5px;
        content: '';
      }
    }
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 280px;

  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    svg {
      vertical-align: middle;
      cursor: pointer;
      transition: all 0.25s ease-out;
      fill: ${(props) => props.theme.colors.icons};

      &:nth-child(2) {
        margin: 0px 10px 0px 10px;
      }

      &:hover {
        fill: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const VolumeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;

  .bar {
    width: 100%;
    flex: 1;
    background-color: #333;
    height: 5px;
    border-radius: 2px;

    div {
      height: 100%;
      width: 20%;
      background-color: ${(props) => props.theme.colors.primary};
      position: relative;

      &:after {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.primary};
        position: absolute;
        right: -5px;
        top: -2.5px;
        content: '';
      }
    }
  }
`;
