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
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { fetchMovies, Movie } from "@/services/apiService";
import SnapCarousel from "@/components/titleCarousel";
import { titleData } from "@/data/movieData";
const { width, height } = Dimensions.get("window");

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSnapToItem = (index: number) => {
    setCurrentIndex(index);
    console.log("Snapped to item:", index);
  };
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
          <Image
            source={{
              uri: titleData[currentIndex].bgImg,
            }}
            style={styles.bgImg}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,1)"]}
            style={styles.gradient}
          />
          <SnapCarousel data={titleData} onSnapToItem={handleSnapToItem} />

          <View style={styles.subscribeBtn}>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.btn1}>
                <Entypo name="controller-play" size={16} color="white" />
                Watch Now
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.btn2}>
                <AntDesign name="plus" size={20} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
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
    paddingVertical: height * 0.03,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 100,
    height: "50%",
  },
  container: {
    width: "100%",
    height: 500,
    alignItems: "center",
    backgroundColor: "black",
  },
  container2: {
    flex: 1,
    width: "100%",
    height: 220,
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 100,
    objectFit: "cover",
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
  subscribeBtn: {
    flexDirection: "row",
    position: "absolute",
    bottom: 40,
  },
  bgImg: {
    position: "absolute",
    height: "80%",
    width: "100%",
  },
  btnContainer: {
    padding: 10,
  },
  btn1: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btn2: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
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
