import { combineReducers } from "redux";
import community from "./community";

const rootReducer = combineReducers({
  community: community,
});

export default rootReducer;
