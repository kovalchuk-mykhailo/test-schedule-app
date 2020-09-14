import { createSelector } from "reselect";
import { STATUS_BOOKED } from "../constants/LessonStatus";

export const scheduleSelector = (state) => state.scheduleData.schedule;

export const lessonsSelector = createSelector(scheduleSelector, (schedule) => {
  const initLessons = [...new Array(24)].map(() =>
    [...new Array(7)].map(() => ({
      status: null,
    }))
  );
  for (let val of schedule) {
    const hour = +val.start;
    const day = +val.day;
    initLessons[hour - 1][day - 1] = {
      status: `${val.status}`,
    };
  }
  return initLessons;
});

export const countSelector = createSelector(scheduleSelector, (schedule) =>
  schedule.reduce(
    (acc, value) => (value.status === STATUS_BOOKED ? acc + 1 : acc),
    0
  )
);
