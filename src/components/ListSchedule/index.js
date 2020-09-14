import React from "react";
import ListScheduleItem from "../ListScheduleItem";
import styles from "./list.module.css";

const ListSchedule = ({ schedule }) => {
  return (
    <ul className={styles.listContainer}>
      {schedule.map((val, index) => {
        return <ListScheduleItem key={index} item={val} />;
      })}
    </ul>
  );
};

export default ListSchedule;
