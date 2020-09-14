import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getScheduleAsyncRequest } from "../../actions/schedule";
import ListSchedule from "./components/ListSchedule";
import ScheduleTableContainer from "./components/ScheduleTableContainer";
import { scheduleSelector } from "../../selectors";

import styles from "./styles.module.css";

const HomePage = ({ schedule, getScheduleAsyncRequest }) => {
  useEffect(() => {
    getScheduleAsyncRequest();
  }, []);

  return (
    <div className={styles.homePage}>
      <ListSchedule schedule={schedule} />
      <ScheduleTableContainer schedule={schedule} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedule: scheduleSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getScheduleAsyncRequest: () => {
    dispatch(getScheduleAsyncRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
