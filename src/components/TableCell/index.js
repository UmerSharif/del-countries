import React from "react";
import PropTypes from "prop-types";

import "./TableCell.scss";

import { FaSortDown, FaSortUp } from "react-icons/fa";

function TableCell({
  name,
  sortOrder,
  sortColumn,
  handleClick
}) {
  console.log("i am rendering")
  return (
    <th className="cell-tr" onClick={() => handleClick(name.toLowerCase())}>
      {name}
      {sortColumn && sortOrder === "desc" ? (
        <span className="cell-tr__span">
          <FaSortDown />
        </span>
      ) : (
        <span className="cell-tr__span">
          <FaSortUp />
        </span>
      )}
    </th>
  );
}
export default React.memo(TableCell)
TableCell.propTypes = {
  name: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortColumn: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};
