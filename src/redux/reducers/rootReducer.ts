import { combineReducers } from "redux";
import { currentUserReducer } from "./currentUser.reducer";
import { postsReducer } from "./posts.reducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  posts: postsReducer
});

export { rootReducer };
