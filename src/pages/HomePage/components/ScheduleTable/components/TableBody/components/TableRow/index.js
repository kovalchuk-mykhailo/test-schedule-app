import React from "react";
import { connect } from "react-redux";

import classNames from "classnames";

import { setSchedule } from "../../../../../../../../actions/schedule";
import {
  STATUS_BOOKED,
  STATUS_FREE,
} from "../../../../../../../../constants/LessonStatus";
import { scheduleSelector } from "../../../../../../../../selectors";

import styles from "./styles.module.css";

const isClickable = (status) => {
  return status === STATUS_FREE || status === STATUS_BOOKED;
};

const getNewStatus = (status) => {
  return status === STATUS_FREE ? STATUS_BOOKED : STATUS_FREE;
};

const TableRow = ({ schedule, items, header, hour, handleLessonClick }) => {
  return (
    <tr>
      <th>{header}</th>
      {items.map((val, index) => (
        <td
          key={index}
          className={classNames(styles.scheduleBook, styles[val.status])}
          onClick={handleLessonClick(val.status, schedule, index + 1, hour)}
        ></td>
      ))}
    </tr>
  );
};

const mapStateToProps = (state) => ({
  schedule: scheduleSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleLessonClick: (status, schedule, day, hour) => (e) => {
    if (isClickable(status)) {
      e.preventDefault();
      const changedSchedule = schedule.map((lesson) => {
        if (day === +lesson.day && hour === +lesson.start) {
          return { ...lesson, status: getNewStatus(lesson.status) };
        }
        return lesson;
      });
      dispatch(setSchedule(changedSchedule));
    } else return null;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
