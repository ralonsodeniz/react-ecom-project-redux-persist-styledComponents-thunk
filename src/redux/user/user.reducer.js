import { UserActionTypes } from "./users.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        // if the action type matches with one of the switch case we want to return a new object, with all the properties of the initial one spreaded and the property of interest for this case updated with the action.payload
        ...state,
        currentUser: action.payload
      }; // this is the same as Object.assign({}, state, {currentUser: action.payload})

    default:
      return state; // if none of the actions type match the ones in the state we want to return the same state we had
  }
};

export default userReducer;
