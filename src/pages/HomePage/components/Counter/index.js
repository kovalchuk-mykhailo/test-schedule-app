import React from "react";
import { connect } from "react-redux";

import { COUNTER_TEXT } from "../../../../constants/Texts";
import { countSelector } from "../../../../selectors";

import styles from "./styles.module.css";

const Counter = ({ value }) => {
  return (
    <div className={styles.counter}>
      {COUNTER_TEXT}: {value}
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: countSelector(state),
});

export default connect(mapStateToProps)(Counter);
