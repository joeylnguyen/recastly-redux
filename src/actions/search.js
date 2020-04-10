import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';

var handleVideoSearch = (q) => {
  // Return a function that takes dispatch as a parameter
  // Build object that has key and input q
  // Invoke searchYoutube with object and dispatch as callback
  // dispatch currentVideo on data[0]
  // dispatch videoList on data

  return _.debounce((dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  }, 500);

  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
