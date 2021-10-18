import React, { useCallback, useState } from "react";

import CountryTable from "./components/Table";
import useCountries from "./hooks/useCountries";
import Search from "./components/Search";
import "./App.css";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [sortColumn, setSortColumn] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [keyword, setKeyword] = useState("");
  const debounceValue = useDebounce(keyword, 1000)
  // eslint-disable-next-line no-unused-vars
  const [error, countries] = useCountries(debounceValue, sortOrder, sortColumn);

  const handleChange = useCallback((event) => {
    setKeyword(event.target.value);
  },[]);

  const handleClick = useCallback((colName) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(colName);
  },[sortOrder]);
  return (
    <div className="App">
      <Search keyword={keyword} handleChange={handleChange} />
      <CountryTable
        countries={countries}
        handleClick={handleClick}
        sortOrder={sortOrder}
        sortColumn={sortColumn}
      />
    </div>
  );
}

export default App;
