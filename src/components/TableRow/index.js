import React from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../../actions/counter";
import { setSchedule } from "../../actions/schedule";
import { STATUS_BOOKED, STATUS_FREE } from "../../constants/LessonStatus";
import styles from "./scheduleItem.module.css";

const localStyles = {
  free: {
    background: "rgb(50, 224, 50)",
  },
  booked: {
    background: "rgb(56, 120, 240)",
  },
};

const isClickable = (status) => {
  return status === STATUS_FREE || status === STATUS_BOOKED;
};

const getNewStatus = (status) => {
  return status === STATUS_FREE ? STATUS_BOOKED : STATUS_FREE;
};

function TableRow({ schedule, items, header, hour, handleLessonClick }) {
  return (
    <tr>
      <th>{header}</th>
      {items.map((val, index) => (
        <td
          key={index}
          className={styles.scheduleBook}
          onClick={handleLessonClick(val.status, schedule, index + 1, hour)}
          style={localStyles[val.status]}
        ></td>
      ))}
    </tr>
  );
}

const mapStateToProps = (store) => ({
  schedule: store.scheduleData.schedule,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => {
    dispatch(incrementCounter());
  },
  decrementCounter: () => {
    dispatch(decrementCounter());
  },
  handleLessonClick: (status, schedule, day, hour) => (e) => {
    if (isClickable(status)) {
      e.preventDefault();
      let nextStatus;
      const changed = schedule.map((val) => {
        if (day === +val.day && hour === +val.start) {
          const nextStatus = getNewStatus(val.status);
          return { ...val, status: nextStatus };
        }
        return val;
      });
      dispatch(setSchedule(changed));
      nextStatus === STATUS_FREE
        ? dispatch(decrementCounter())
        : dispatch(incrementCounter());
    } else return null;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
