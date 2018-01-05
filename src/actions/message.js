import ActionTypes from "constants/ActionTypes";

// const setMessage = payload => ({
//   type: ActionTypes.SET_MESSAGE,
//   payload,
// });

// const setMessage = contestID => (dispatch, getState) => {
//   dispatch(fetchLineupFormatForContestRequest());

// const checkPublishedContentCards = (resource_uris, after) => {
//   return (dispatch) => {
//     return ContentCardsClient.published(resource_uris, {after: after, limit: 1}).then((json) => {
//       dispatch(receiveNewerContentCards(json.content_cards || []));
//     }).catch((error) => {
//       dispatch(showMessage(error.message, MessageTypes.ERROR));
//     });
//   };
// };
//
// return dispatch => {
// dispatch({
//    type: SET_MESSAGE,
//    payload: {
//     message
//    }
// })

const setMessage = message => dispatch => {
  dispatch({
    type: ActionTypes.SET_MESSAGE,
    payload: {
      message
    }
  });
};

export default setMessage;
