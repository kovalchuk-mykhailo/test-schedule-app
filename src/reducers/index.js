import { combineReducers } from "redux";

import { scheduleReducer } from "./sheduleReducer";

const allReducers = combineReducers({
  scheduleData: scheduleReducer,
});

export default allReducers;
