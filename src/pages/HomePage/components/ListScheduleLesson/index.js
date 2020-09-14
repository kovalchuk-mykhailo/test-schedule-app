import React from "react";

import { STATUS_FREE } from "../../../../constants/LessonStatus";
import { DAY_TEXT, HOUR_TEXT, START_TEXT } from "../../../../constants/Texts";

import styles from "./styles.module.css";

const ListScheduleLesson = ({ lesson }) => {
  if (lesson.status === STATUS_FREE) {
    return (
      <li className={styles.listItem}>
        <p>
          {DAY_TEXT}: {lesson.day}
        </p>
        <p>
          {START_TEXT}: {lesson.start} {HOUR_TEXT}
        </p>
      </li>
    );
  } else return null;
};

export default ListScheduleLesson;
