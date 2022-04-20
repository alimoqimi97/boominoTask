import React from 'react';
import Film from '../Film/Film';
import PropTypes from 'prop-types';
import './VideoGroup.css';

const VideoGroup = ({ videos }) => {

  return (
    <div className='Page'>
      {
        videos.map((video, index) => {
          return (
            <Film 
              video={video}
            />
          )
        })
      }
    </div>
  );
}

VideoGroup.propTypes = {};

VideoGroup.defaultProps = {};

export default VideoGroup;
