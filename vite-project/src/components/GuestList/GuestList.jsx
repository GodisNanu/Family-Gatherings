import React from "react";
import "./GuestList.css";

const GuestList = ({ records }) => {
  return (
    <section className="guestlist">
      <h3 className="guestlist__header">Guest List</h3>
      <table className="guestlist__table">
        <thead className="guestlist__table-head">
          <tr className="guestlist__table-row">
            <th className="guestlist__table-header-cell">Name</th>
            <th className="guestlist__table-header-cell">Dish</th>
            <th className="guestlist__table-header-cell">Additional</th>
          </tr>
        </thead>
        <tbody className="guestlist__table-body">
          {records.map((record) => (
            <tr key={record.id} className="guestlist__table-row">
              <td className="guestlist__table-cell">{record.fields["name"]}</td>
              <td className="guestlist__table-cell">{record.fields["dish"]}</td>
              <td className="guestlist__table-cell">
                {record.fields["additional"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default GuestList;
