import { types } from "./types";
import initialState from "./initialState";
import { uniqBy } from "loadsh";

//Updating state in the reducer based on the response
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //For getting communities
    case types.GET_COMMUNITY_PENDING:
      return {
        ...state,
        Loading: true,
        Success: false,
        Error: false,
      };

    case types.GET_COMMUNITY_SUCCESS:
      return {
        ...state,
        Loading: false,
        Success: true,
        Error: false,
        Communities: uniqBy(
          [...action.data.communities, ...state.Communities],
          "_id"
        ),
        HasMore: false,
      };

    case types.GET_COMMUNITY_HAS_MORE:
      return {
        ...state,
        Loading: false,
        Success: true,
        Error: false,
        Communities: uniqBy(
          [...action.data.communities, ...state.Communities],
          "_id"
        ),
        HasMore: true,
      };

    case types.GET_COMMUNITY_ERROR:
      return {
        ...state,
        Loading: false,
        Success: false,
        Error: true,
      };

    //For adding a community
    case types.POST_COMMUNITY_PENDING:
      return {
        ...state,
        PostLoading: true,
        PostSuccess: false,
        PostError: false,
      };

    case types.POST_COMMUNITY_SUCCESS:
      return {
        ...state,
        PostLoading: false,
        PostSuccess: true,
        PostError: false,
        Communities: [action.data, ...state.Communities],
      };

    case types.POST_COMMUNITY_ERROR:
      return {
        ...state,
        PostLoading: false,
        PostSuccess: false,
        PostError: true,
      };

    //To reset the state
    case types.RESET_STATE:
      return {
        ...state,
        PostLoading: false,
        PostSuccess: false,
        PostError: false,
        Loading: false,
        Success: false,
        Error: false,
      };

    default:
      return state;
  }
};

export default reducer;
