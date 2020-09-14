import React, { useState } from "react";
import { connect } from "react-redux";
import { STATUS_BOOKED } from "../../constants/LessonStatus";
import Counter from "../Counter";
import ScheduleTable from "../ScheduleTable";
import styles from "./tableContainer.module.css";

const initLessons = [...new Array(24)].map(() =>
  [...new Array(7)].map(() => ({
    status: null,
  }))
);

const getLessons = (schedule) => {
  for (let val of schedule) {
    const hour = +val.start;
    const day = +val.day;
    initLessons[hour - 1][day - 1] = {
      status: `${val.status}`,
    };
  }
  return initLessons;
};

const countBooked = (schedule) => {
  return schedule.reduce(
    (acc, value) => (value.status === STATUS_BOOKED ? acc + 1 : acc),
    0
  );
};

const ScheduleTableContainer = ({ schedule }) => {
  const counter = countBooked(schedule);

  return (
    <div className={styles.tableContainer}>
      <Counter value={counter} />
      <ScheduleTable lessons={getLessons(schedule)} />
    </div>
  );
};

const mapStateToProps = (store) => ({
  counter: store.counterBooked.counter,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(ScheduleTableContainer);
