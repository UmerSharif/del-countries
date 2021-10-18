import React from "react";
import PropTypes from "prop-types";

import "./Search.scss";

 function Search({ keyword, handleChange }) {
  return (
    <input
      className="search"
      type="text"
      name="search"
      placeholder="Search Stuff...."
      value={keyword}
      onChange={handleChange}
    />
  );
}

export default React.memo(Search)

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
