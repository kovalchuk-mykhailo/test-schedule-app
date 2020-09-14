import React from "react";
import { connect } from "react-redux";
import { setSchedule } from "../../actions/schedule";
import ScheduleTableContainer from "../ScheduleTableContainer";
import TableRow from "../TableRow";
import styles from "./table.module.css";

const TableHead = () => (
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Пон. 19</th>
      <th scope="col">Вт. 20</th>
      <th scope="col">Ср. 21</th>
      <th scope="col">Чт. 22</th>
      <th scope="col">Пт. 23</th>
      <th scope="col">Сб. 24</th>
      <th scope="col">Нд. 25</th>
    </tr>
  </thead>
);

const TableBody = ({ lessons }) => (
  <tbody>
    {lessons.map((row, index) => {
      const hour = index + 1;
      const header = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      return <TableRow items={row} header={header} hour={hour} />;
    })}
  </tbody>
);

function ScheduleTable({ lessons }) {
  return (
    <table className={styles.tableContainer}>
      <TableHead />
      <TableBody lessons={lessons} />
      {/* <tbody>
        {lessons.map((row, i) => {
          const hour = i + 1;
          const header = hour < 10 ? `0${hour}:00` : `${hour}:00`;
          return <TableRow items={row} header={header} hour={hour} />;
        })}
      </tbody> */}
    </table>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setSchedule: (schedule) => {
    dispatch(setSchedule(schedule));
  },
});

export default connect(null, mapDispatchToProps)(ScheduleTable);
