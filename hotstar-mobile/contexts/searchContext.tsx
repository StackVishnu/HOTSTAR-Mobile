import React, { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "@/services/apiService";

interface SearchContextType {
  searchArr: Movie[];
  addSearch: (newMovies: Movie[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

interface SearchProviderContext {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderContext> = ({
  children,
}) => {
  const [searchArr, setSearchArr] = useState<Movie[]>([]);

  const addSearch = (newMovies: Movie[]) => {
    setSearchArr((prevArr) => {
      // Filter out movies that already exist in the array
      const uniqueMovies = newMovies.filter(
        (movie) => !prevArr.some((m) => m.title === movie.title)
      );

      // Create a new array by combining the previous array and unique movies
      return [...prevArr, ...uniqueMovies];
    });
  };

  return (
    <SearchContext.Provider value={{ searchArr, addSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
