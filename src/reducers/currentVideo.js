import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

// var initialState = {
//   currentVideo: exampleVideoData[0]
// };

var currentVideoReducer = (state = exampleVideoData[0], action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //state: {
  //videos: [{}, {}, {}],
  //currentVideo: {},
  //value: 'string'
  //}
  // If action type is equal to 'CHANGE_VIDEO'
  // Return an object that has property currentVideo with value action.video
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;
  }
};

export default currentVideoReducer;


// if (action.type === 'CHANGE_VIDEO') {
//     return {
//       ...state,
//       // videos: state.videos || null,
//       currentVideo: action.video
//       // value: state.value || null
//     };

//   } else {
//     return state;
//   }