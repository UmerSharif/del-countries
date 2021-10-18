import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

import TableRow from "../TableRow";
import TableHeader from "../TableHeader";
import "./Table.scss";

export default function CountryTable({
  countries,
  handleClick,
  sortOrder,
  sortColumn,
}) {
  return (
    <Table>
      <TableHeader
        handleClick={handleClick}
        sortOrder={sortOrder}
        sortColumn={sortColumn}
      />
      <tbody>
        {countries.map((country) => (
          <TableRow
            key={country.name}
            flagUrl={country.flag}
            countryName={country.name}
            languages={country.languages}
            population={country.population}
            region={country.region}
          />
        ))}
      </tbody>
    </Table>
  );
}

CountryTable.propTypes = {
  countries: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortColumn: PropTypes.string.isRequired,
};
