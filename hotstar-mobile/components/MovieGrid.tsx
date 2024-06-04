import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Pressable,
} from "react-native";
import { useSearch } from "@/contexts/searchContext";
import { fetchMovies, Movie } from "@/services/apiService";
import Row from "./RowComponent";

interface MovieGridProps {
  genre: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ genre }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addSearch, searchArr } = useSearch();
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const result = await fetchMovies(genre);
        setMovies(result);
        addSearch(movies);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  console.log(searchArr);
  return (
    <View>
      <Text style={styles.scrollTitle}>{genre}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.scrollTitle}>Error: {error}</Text>
      ) : (
        <Row arr={movies} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  poster: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
  scrollTitle: {
    color: "white",
    alignSelf: "flex-start",
    padding: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default MovieGrid;
