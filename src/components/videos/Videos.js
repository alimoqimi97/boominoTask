import React, { useEffect, useRef, useState } from 'react';
import VideoGroup from '../Page/VideoGroup';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Videos.css';

const BASE_URL = 'https://vodapi.boomino.ir/content/fake-list';

const Videos = () => {

  const [videoGroups, setVideoGroups] = useState([]);
  const pageNumber = useRef(1);

  const loadMore = () => {
    const URL = BASE_URL + '?page=' + pageNumber.current;

    axios.get(URL).then((response) => {
      const videoGroup = response.data;
      pageNumber.current = videoGroup.page + 1;
      setVideoGroups((prevVideoGroups) => [...prevVideoGroups, response.data]);
    });
  }

  useEffect(loadMore, [pageNumber]);

  return (
    <ul
      onScroll={loadMore}
      className='videos'
    >
      {
        videoGroups.map((videoGroup, index) => {
          return (
            <li key={index}>
              <VideoGroup videos={videoGroup.data} pageNumber={videoGroup.page} />
            </li>
          );
        })
      }
    </ul>
  );
};

Videos.propTypes = {};

Videos.defaultProps = {};

export default Videos;
