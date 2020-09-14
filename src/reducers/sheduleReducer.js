import {
  GET_SCHEDULE_ASYNC_REQUEST,
  GET_SCHEDULE_FAILURE,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  SET_SCHEDULE,
} from "../constants/Schedule";

const initialState = {
  schedule: [],
  isLoading: false,
  error: "",
};

export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE_ASYNC_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_SCHEDULE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: action.schedule,
        isLoading: false,
      };

    case GET_SCHEDULE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case SET_SCHEDULE:
      return {
        ...state,
        schedule: action.schedule,
      };

    default:
      return state;
  }
};
