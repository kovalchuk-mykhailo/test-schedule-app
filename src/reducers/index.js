import { combineReducers } from "redux";
import { counterBookedReducer } from "./counterBookedReducer";
import { scheduleReducer } from "./sheduleReducer";

const allReducers = combineReducers({
  scheduleData: scheduleReducer,
  counterBooked: counterBookedReducer,
});

export default allReducers;
