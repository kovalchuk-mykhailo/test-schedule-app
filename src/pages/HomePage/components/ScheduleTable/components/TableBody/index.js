import React from "react";
import { connect } from "react-redux";

import TableRow from "./components/TableRow";

import { lessonsSelector } from "../../../../../../selectors";

const TableBody = ({ lessons }) => (
  <tbody>
    {lessons.map((row, index) => {
      const hour = index + 1;
      const header = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      return <TableRow key={index} items={row} header={header} hour={hour} />;
    })}
  </tbody>
);

const mapStateToProps = (state) => ({
  lessons: lessonsSelector(state),
});

export default connect(mapStateToProps)(TableBody);
