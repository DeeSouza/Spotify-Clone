import React from 'react';
import { FaHeart } from 'react-icons/fa';
import {
  IoMdPlay,
  IoMdSkipForward,
  IoMdSkipBackward,
  IoMdPause,
  IoMdShuffle,
  IoMdRepeat,
  IoMdList,
  IoMdVolumeHigh,
} from 'react-icons/io';

import {
  Container,
  CurrentMusic,
  ControlsSeekBar,
  SeekbarMusic,
  Options,
  VolumeBar,
} from './styles';

const Seekbar: React.FC = () => {
  return (
    <Container>
      <CurrentMusic>
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/7/78/Red_Hot_Chili_Peppers_-_Californication.jpg/220px-Red_Hot_Chili_Peppers_-_Californication.jpg"
          alt="RHCP"
        />

        <div className="infoMusic">
          <strong className="music">Scar Tissue</strong>
          <strong className="author">Red Hot Chilli Peppers</strong>
          <strong className="album">Californication</strong>
        </div>

        <FaHeart size={18} color="#6d6d6d" />
      </CurrentMusic>

      <ControlsSeekBar>
        <div className="controls">
          <IoMdShuffle color="#FFF" size={18} />
          <IoMdSkipBackward color="#FFF" size={18} />
          <span className="playPause">
            <IoMdPlay color="#FFF" size={25} />
          </span>
          <IoMdSkipForward color="#FFF" size={18} />
          <IoMdRepeat color="#FFF" size={18} />
        </div>

        <SeekbarMusic>
          <strong>01:05</strong>
          <div className="bar">
            <div />
          </div>
          <strong>03:05</strong>
        </SeekbarMusic>
      </ControlsSeekBar>

      <Options>
        <div className="options">
          <IoMdList color="#FFF" size={18} />
          <IoMdVolumeHigh color="#FFF" size={18} />

          <VolumeBar>
            <div className="bar">
              <div />
            </div>
          </VolumeBar>
        </div>
      </Options>
    </Container>
  );
};

export default Seekbar;
