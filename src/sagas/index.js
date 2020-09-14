import { all } from "redux-saga/effects";

import { watchScheduleAsync } from "./watchScheduleAsync";

export default function* rootSaga() {
  yield all([watchScheduleAsync()]);
}
