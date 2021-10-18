import React from "react";
import PropTypes from "prop-types";
import TableCell from "../TableCell";

import "./TableHeader.scss";


const sortNames = ["Flag", "Name", "Language", "Population", "Region"];
export default function TableHeader({ handleClick, sortOrder, sortColumn }) {
  return (
    <thead className="table-head">
      <tr className="table-tr">
        {sortNames.map(col => (
          <TableCell
            key={col}
            name={col}
            sortOrder={sortOrder}
            sortColumn={col.toLowerCase() === sortColumn}
            handleClick={handleClick}
          />
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propType = {
  handleClick: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortColumn: PropTypes.string.isRequired
};
