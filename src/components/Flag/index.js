import React from "react";
import PropTypes from "prop-types";

import "./Flag.scss";

export default function Flag({ imgUrl }) {
  return <img className="flag" src={imgUrl} alt="Flag" />;
}

Flag.propTypes = {
  imgUrl: PropTypes.string.isRequired
};
