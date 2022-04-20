import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleIsModalOpen , setSelectedVideo} from '../../lib/redux/modal/modalSlice';
import './Film.css';

const Film = ({video}) => {

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleIsModalOpen());
    dispatch(setSelectedVideo({
      src: video.main_poster_url,
      title: video.fa_title
    }));
  }

  return (
    <div
      className='video-container'
      onClick={openModal}
    >
      <video
        width="220"
        height="120"
        poster={video.main_poster_url}
        className='video'
      >
        <p>Your browser does not support the video tag.</p>
      </video>
      <p className='caption' >{video.fa_title}</p>
    </div>
  );
}

Film.propTypes = {};

Film.defaultProps = {};

export default Film;
