import { types } from "./types";
import baseURL from "../../constants/baseURL";
import apiEndPoints from "../../constants/apiEndpoints";

//Methods to update the state to get communitites
const getCommunityPending = () => {
  return {
    type: types.GET_COMMUNITY_PENDING,
  };
};

const getCommunityCompleted = (data) => {
  return {
    type: types.GET_COMMUNITY_SUCCESS,
    data,
  };
};

const getCommunityHasMore = (data) => {
  return {
    type: types.GET_COMMUNITY_HAS_MORE,
    data,
  };
};

const getCommunityError = (err) => {
  return {
    type: types.GET_COMMUNITY_ERROR,
    err,
  };
};

//Methods to update the state to create a community
const postCommunityPending = () => {
  return {
    type: types.POST_COMMUNITY_PENDING,
  };
};

const postCommunityCompleted = (data) => {
  return {
    type: types.POST_COMMUNITY_SUCCESS,
    data,
  };
};

const postCommunityError = (err) => {
  return {
    type: types.POST_COMMUNITY_ERROR,
    err,
  };
};

//Calling API to get all communitites
export const getCommunities = (page = 1, limit = 10) => {
  return (dispatch) => {
    dispatch(getCommunityPending());
    let headers = {
      "Content-Type": "application/json",
    };
    console.log(page, limit);
    baseURL
      .get(`${apiEndPoints.COMMUNITY}?page=${page}&limit=${limit}`, {
        headers: headers,
      })
      .then((resp) => {
        if (resp.data.totalPages > page) {
          dispatch(getCommunityHasMore(resp.data));
        } else {
          dispatch(getCommunityCompleted(resp.data));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(getCommunityError(err));
      });
  };
};

//Calling API to create a community
export const postCommunity = (data) => {
  return (dispatch) => {
    dispatch(postCommunityPending());
    let headers = {
      "Content-Type": "application/json",
    };
    baseURL
      .post(`${apiEndPoints.COMMUNITY}`, data, {
        headers: headers,
      })
      .then((resp) => {
        dispatch(postCommunityCompleted(resp.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(postCommunityError(err));
      });
  };
};

//To reset the state to default
export const resetState = () => ({
  type: types.RESET_STATE,
});
