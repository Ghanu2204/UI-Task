import { useEffect, useState } from "react";

export const useDebounceText = (value, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);

  return debounceValue;
};
