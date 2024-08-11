import { useState, useEffect } from "react";
const KEY = "8f178d3d";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoadding] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoadding(true);
        setError("");
        if (query === "") {
          throw new Error("Search Your Movie");
        }
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error("Something Went Wrong with Fetching Movies");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data.Search);
        console.log(data.Search);
        console.log(data);
        setError("");
      } catch (error) {
        console.error(error.message);
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoadding(false);
      }
    }
    if (!query.length > 3) {
      setMovies([]);
      setError("Search Movies");
      return;
    }
    fetchMovies();
    // cleanup Function
    return function () {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
