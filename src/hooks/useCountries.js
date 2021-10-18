import React, { useState, useEffect } from "react";
import _ from "underscore";

export default function useCountries(keyword, sortOrder, sortColumn) {
  console.log(keyword, "keyword")
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [filterCountries, setFilterCountries] = useState([]);

  const baseUrl = "https://restcountries.com/v2";

  async function fetchData() {
    try {
      const res = await fetch(`${baseUrl}/all`);
      const data = await res.json();
      setCountries(data);
      setFilterCountries(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // filtering
    let filteredData = countries.filter((country) => {
      return (
        country.name.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        country.nativeName.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        country.languages.some(
          (lang) => lang.iso639_1 === keyword.toLowerCase()
        ) ||
        country.region.toLowerCase().search(keyword.toLowerCase()) !== -1
      );
    });

    //sorting
    if (sortColumn && sortOrder === "desc") {
      filteredData = _.sortBy(filteredData, `${sortColumn}`).reverse();
    } else if (sortColumn && sortOrder === "asc") {
      filteredData = _.sortBy(filteredData, `${sortColumn}`);
    }

    setFilterCountries(filteredData);
  }, [countries, keyword, sortColumn, sortOrder]);
  return [error, filterCountries];
}
