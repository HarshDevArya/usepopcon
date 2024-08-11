import { useState, useEffect } from "react";
export function useLocalStorage(initState) {
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("watchedMovie");
    return storedValue ? JSON.parse(storedValue) : initState;
  });
  useEffect(
    function () {
      localStorage.setItem("watchedMovie", JSON.stringify(watched));
    },
    [watched]
  );
  return [watched, setWatched];
}
