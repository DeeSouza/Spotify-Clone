import React from 'react';
import {
  IoMdPlay,
  IoMdSkipForward,
  IoMdSkipBackward,
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
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/3/33/Audioslave_-_Audioslave_%28%C3%A1lbum%29.jpg/220px-Audioslave_-_Audioslave_%28%C3%A1lbum%29.jpg"
          alt="Audioslave"
        />

        <div className="infoMusic">
          <strong className="music">Be Yourself</strong>
          <strong className="author">Audioslave</strong>
          <strong className="album">Audioslave</strong>
        </div>
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
