import React from "react";
import { STATUS_FREE } from "../../constants/LessonStatus";
import styles from "./item.module.css";

const renderItem = (item) => {
  if (item.status === STATUS_FREE) {
    return (
      <li className={styles.listItem}>
        <p>День: {item.day}</p>
        <p>Старт:{item.start} год.</p>
      </li>
    );
  } else return null;
};

const ListScheduleItem = ({ item }) => {
  return renderItem(item);
};

export default ListScheduleItem;
