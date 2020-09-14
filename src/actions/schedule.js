import {
  GET_SCHEDULE_ASYNC_REQUEST,
  GET_SCHEDULE_FAILURE,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  SET_SCHEDULE,
} from "../constants/Schedule";

export const getScheduleAsyncRequest = () => ({
  type: GET_SCHEDULE_ASYNC_REQUEST,
});

export const getScheduleRequest = () => ({
  type: GET_SCHEDULE_REQUEST,
});

export const getScheduleSuccess = (schedule) => ({
  type: GET_SCHEDULE_SUCCESS,
  schedule,
});

export const getScheduleFailure = (error) => ({
  type: GET_SCHEDULE_FAILURE,
  error,
});

export const setSchedule = (schedule) => ({
  type: SET_SCHEDULE,
  schedule,
});
