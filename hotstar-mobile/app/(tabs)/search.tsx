import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";
import { SearchBar } from "@rneui/themed";
import { Text, View } from "@/components/Themed";

import { Movie } from "@/services/apiService";
import { fetchMovies } from "@/services/apiService";
const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const result = await fetchMovies("horror");
        setMovies(result);
        setFilteredMovies(result);
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

  useEffect(() => {
    if (search) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [search, movies]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          platform="android"
        />
      </View>
      <ScrollView>
        <View style={styles.list}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <Link
                key={`${index} + ${movie.id}`}
                href={{
                  pathname: "/movieDetail",
                  params: {
                    id: movie.id,
                    title: movie.title,
                    imgUrl: movie.posterURL,
                  },
                }}
                asChild
              >
                <Pressable>
                  <View style={styles.card}>
                    <Image
                      source={{ uri: movie.posterURL }}
                      style={styles.poster}
                    />
                  </View>
                </Pressable>
              </Link>
            ))
          ) : (
            <Text style={styles.emptyMessage}>No movies found</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    width,
  },
  searchBar: {
    padding: 10,
    backgroundColor: "black",
  },
  list: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width,
    gap: 10,
    padding: 20,
    backgroundColor: "black",
  },
  emptyMessage: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },

  card: {
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
  },
  poster: {
    width: 150,
    height: 200,
    objectFit: "fill",
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
});
