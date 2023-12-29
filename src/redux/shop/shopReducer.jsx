import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./shopTypes";

const intialState = {
  shopItems: [],
  loading: false,
};

export const shopReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        shopItems: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default shopReducer;
