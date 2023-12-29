import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./shopTypes";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS,
    payload: items,
  };
};

export const fetchFailure = () => {
  return {
    type: FETCH_FAILURE,
  };
};
