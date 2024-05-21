import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { fetchMovies, Movie } from "@/services/apiService";

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const result = await fetchMovies();
        setMovies(result);
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

  const renderItem = ({ item }: { item: Movie }) => (
    <View style={styles.card}>
      {/* <Text style={styles.title}>{item.title}</Text> */}
      <Image source={{ uri: item.posterURL }} style={styles.poster} />
    </View>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image source={require("@/assets/images/favicon.png")}></Image>
        </View>
        <View style={styles.container2}>
          <Text style={styles.scrollTitle}>Latest</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text style={styles.scrollTitle}>Error: {error}</Text>
          ) : (
            <FlatList
              data={movies}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.listContent}
            />
          )}
        </View>
        <View style={styles.container2}>
          <Image source={require("@/assets/images/favicon.png")}></Image>
        </View>
        <View style={styles.container2}>
          <Image source={require("@/assets/images/favicon.png")}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
    // <SafeAreaView style={styles.safeArea}>
    //   <StatusBar style="light" />
    //   {loading ? (
    //     <ActivityIndicator size="large" color="#0000ff" />
    //   ) : error ? (
    //     <Text style={styles.scrollTitle}>Error: {error}</Text>
    //   ) : (
    //     <FlatList
    //       data={movies}
    //       horizontal
    //       keyExtractor={(item) => item.id}
    //       renderItem={renderItem}
    //       contentContainerStyle={styles.listContent}
    //     />
    //   )}
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,

    paddingVertical: 20,
  },
  container: {
    flex: 3,
    width: "100%",
    height: 400,
    alignItems: "center",
    backgroundColor: "red",
  },
  container2: {
    flex: 1,
    width: "100%",
    height: 220,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  itemText: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
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
  listContent: {
    padding: 10,
  },
});
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   listContent: {
//     padding: 20,
//   },

// });

export default App;
