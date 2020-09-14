import React from "react";
import { connect } from "react-redux";

import ListScheduleLesson from "../ListScheduleLesson";
import { scheduleSelector } from "../../../../selectors";

import styles from "./styles.module.css";

const ListSchedule = ({ schedule }) => {
  return (
    <ul className={styles.listContainer}>
      {schedule.map((lesson, index) => {
        return <ListScheduleLesson key={index} lesson={lesson} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  schedule: scheduleSelector(state),
});

export default connect(mapStateToProps, null)(ListSchedule);
