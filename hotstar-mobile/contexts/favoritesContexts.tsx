import React, { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "@/services/apiService";

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (favorite: Movie) => void;
  removeFavorite: (title: string) => void;
  isInFavorites: (title: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (favorite: Movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, favorite]);
    console.log(favorites);
  };

  const removeFavorite = (title: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.title !== title)
    );
  };

  const isInFavorites = (title: string): boolean => {
    return favorites.some((movie) => movie.title === title);
  };

  return (
    <FavoritesContext.Provider
      value={{ isInFavorites, addFavorite, removeFavorite, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
