import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsModalOpen } from '../../lib/redux/modal/modalSlice';

const Modal = () => {

  const [isDisabled, setIsDisabled] = useState(false);
  const selectedVideo = useSelector((state) => state.modal.selectedVideo);
  const dispatch = useDispatch();
  const MODAL_TITLE = 'انیمیشن ' + selectedVideo.title + ' رو چقدر دوست داشتی؟ ';
  const [likeIcon, setLikeIcon] = useState('./like.svg');
  const [dislikeIcon, setDislikeIcon] = useState('./dislike.svg');



  const closeModal = () => {
    dispatch(toggleIsModalOpen());
  }

  const enableAcceptButton = () => {
    setIsDisabled(true);
  }

  const handleLikeButton = () => {
    if (dislikeIcon !== './dislike-select.svg') {
      setLikeIcon('./like-select.svg');
    }
    enableAcceptButton();
  }

  const handleDislikeButton = () => {
    if (likeIcon !== './like-select.svg') {
      setDislikeIcon('./dislike-select.svg');
    }
    enableAcceptButton();
  }

  return (
    <div className="Modal">
      <button
        className='without-style-button'
        type='button'
        onClick={closeModal}
      >
        <img
          src='./close.svg'
          alt='close'
        />
      </button>
      <div className='modal-body'>
        <div class="modal-header">
          <img className='modal-image' src={selectedVideo.src} alt="video_image" />
          <h3>{MODAL_TITLE}</h3>
        </div>
        <div className='actions '>
          <button
            className='without-style-button'
            type='button'
            onClick={handleLikeButton}
          >
            <img
              src={likeIcon}
              alt='like'
            />
          </button>
          <button
            className='without-style-button'
            type='button'
            onClick={handleDislikeButton}
          >
            <img
              src={dislikeIcon}
              alt='dislike'
            />
          </button>
        </div>
        <button
          className='accept-button accept-button-border'
          type='button'
          onClick={closeModal}
          disabled={!isDisabled}
        >
          همینه
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
