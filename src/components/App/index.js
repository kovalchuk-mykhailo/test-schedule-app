import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import ListSchedule from "../ListSchedule";
import ScheduleTableContainer from "../ScheduleTableContainer";
import { getScheduleAsyncRequest } from "../../actions/schedule";
import { connect } from "react-redux";

const App = ({ schedule, getScheduleAsyncRequest }) => {
  useEffect(() => {
    getScheduleAsyncRequest();
  }, []);

  return (
    <div className={styles.App}>
      <ListSchedule schedule={schedule} />
      <ScheduleTableContainer schedule={schedule} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.scheduleData.schedule,
});

const mapDispatchToProps = (dispatch) => ({
  getScheduleAsyncRequest: () => {
    dispatch(getScheduleAsyncRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
