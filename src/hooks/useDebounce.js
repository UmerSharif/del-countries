import React, { useEffect, useState } from "react";

export default function useDebounce(value, timeout) {
  const [debounceValue, setdebounceVale] = useState(value);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setdebounceVale(value);
    }, timeout);
    return () => {
      clearTimeout(timerId);
    };
  }, [value, timeout]);

  return debounceValue;
}
