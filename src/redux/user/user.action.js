import { UserActionTypes } from "./users.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER, // this has to be the exact same string that we have in our reducer case that we want to trigger with this action
  payload: user
});
