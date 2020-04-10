import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

// var initialState = {
//   currentVideo: exampleVideoData[0]
// };

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // If action type is equal to 'CHANGE_VIDEO'
  // Return an object that has property currentVideo with value action.video
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video || null;
  default:
    return state;
  }
};

export default currentVideoReducer;

