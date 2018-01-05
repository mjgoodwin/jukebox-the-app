import ActionTypes from 'constants/ActionTypes';

const initState = {
  message: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
