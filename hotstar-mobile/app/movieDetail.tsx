import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import MovieGrid from "@/components/MovieGrid";
const { width, height } = Dimensions.get("window");
export default function movieDetail() {
  const { id, title, imgUrl } = useLocalSearchParams();
  console.log(imgUrl);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainDescription}>
          <View style={styles.banner}>
            <Image source={{ uri: `${imgUrl}` }} style={styles.bannerImg} />
          </View>
          <View style={styles.bannerDetails}>
            <Text style={styles.title}>{`${title}`}</Text>
            <Text style={styles.title}>{`2024 • 2h 51m • 7 languages`}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.bannerBtn}>
              <Text style={styles.titleBlack}>
                <Entypo name="controller-play" size={18} color="black" />
                Watch Now
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.movieDetails}>
            <Text
              style={[styles.genreText]}
            >{`Superhero | Action | Dark Humour`}</Text>
            <Text
              style={styles.titleWhite}
            >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has`}</Text>
          </View>
          <View style={styles.icons}>
            <View style={styles.iconContainer}>
              <AntDesign
                name="plus"
                size={25}
                style={styles.icon}
                color="white"
              />
              <Text>{`Watchlist`}</Text>
            </View>

            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="download"
                size={25}
                style={styles.icon}
                color="white"
              />
              <Text>{`Download`}</Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="share-outline"
                size={25}
                style={styles.icon}
                color="white"
              />
              <Text>{`Share`}</Text>
            </View>
            <View style={styles.iconContainer}>
              <AntDesign
                name="hearto"
                size={25}
                style={styles.icon}
                color="white"
              />
              <Text>{`Rate`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <MovieGrid genre="Animation" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleWhite: {
    color: "white",
  },
  titleBlack: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  genreText: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  mainDescription: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    height: height * 0.8,
    width,
    gap: 5,
    backgroundColor: "black",
    // marginBottom: 50,
  },
  banner: {
    backgroundColor: "black",
    borderRadius: 5,

    height: height * 0.25,
    width: width * 0.95,
  },
  bannerDetails: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",

    height: height * 0.15,
    width: width * 0.95,
  },
  bannerBtn: {
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.06,
    width: width * 0.95,
    marginVertical: 10,
    color: "black",
  },
  movieDetails: {
    alignContent: "space-between",
    backgroundColor: "black",
    height: height * 0.15,
  },
  title2: {
    color: "black",
  },
  icons: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "black",
    width,
  },
  icon: {
    margin: 5,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    marginVertical: 5,
  },
  bannerImg: {
    height: "100%",
    width: "100%",
    objectFit: "fill",
    borderRadius: 10,
  },
  container2: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
});
