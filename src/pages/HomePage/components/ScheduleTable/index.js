import React from "react";

import TableBody from "./components/TableBody";
import TableHead from "./components/TableHead";

import styles from "./styles.module.css";

const ScheduleTable = () => {
  return (
    <table className={styles.tableContainer}>
      <TableHead />
      <TableBody />
    </table>
  );
};

export default ScheduleTable;
