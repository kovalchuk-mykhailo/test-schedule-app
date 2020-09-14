import { takeEvery, call, put } from "redux-saga/effects";
import { setCounter } from "../actions/counter";
import {
  getScheduleFailure,
  getScheduleRequest,
  getScheduleSuccess,
} from "../actions/schedule";
import { GET_SCHEDULE_ASYNC_REQUEST } from "../constants/Schedule";
import { getScheduleData } from "../utils/apiHelper";

function* requestScheduleAsync() {
  try {
    yield put(getScheduleRequest());

    const schedule = yield call(getScheduleData);

    yield put(getScheduleSuccess(schedule));
  } catch (error) {
    yield put(getScheduleFailure(error.message));
  }
}

export function* watchScheduleAsync() {
  yield takeEvery(GET_SCHEDULE_ASYNC_REQUEST, requestScheduleAsync);
}
