import { useEffect, useState } from "react";

const getMatches = (mediaQuery: string): boolean => {
  return window ? window.matchMedia(mediaQuery).matches : false;
};

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => setMatches(getMatches(query));
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
