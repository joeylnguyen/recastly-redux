import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

// var initialState = {
//   videoList: exampleVideoData
// };

var videoListReducer = (state = exampleVideoData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;
  default:
    return state;
  }
};

export default videoListReducer;
