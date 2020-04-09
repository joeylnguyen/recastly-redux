import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //state: {
  //videos: [{}, {}, {}],
  //currentVideo: {},
  //value: 'string'
  //}
  // If action type is equal to 'CHANGE_VIDEO'
  // Return an object that has property currentVideo with value action.video
  switch(action.type) {
    case 'CHANGE_VIDEO':
      return {
        ...state,
        currentVideo: action.video
      }
    default:
      return state
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