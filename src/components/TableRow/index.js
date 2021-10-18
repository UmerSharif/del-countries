import React from "react";
import PropTypes from "prop-types";
import Flag from "../Flag";

import "./TableRow.scss";

export default function TableRow({
  flagUrl,
  countryName,
  languages,
  population,
  region
}) {
  return (
    <tr className="tr">
      <td>
        <Flag imgUrl={flagUrl} />
      </td>
      <td>{countryName}</td>
      <td>
        {languages.map(lang => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </td>
      <td>{population}</td>
      <td>{region}</td>
    </tr>
  );
}

TableRow.propTypes = {
  flagUrl: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired
};
