import React from "react";

import Counter from "../Counter";
import ScheduleTable from "../ScheduleTable";

import styles from "./styles.module.css";

const ScheduleTableContainer = () => {
  return (
    <div className={styles.tableContainer}>
      <Counter />
      <ScheduleTable />
    </div>
  );
};

export default ScheduleTableContainer;
