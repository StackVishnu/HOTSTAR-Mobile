import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { useFavorites } from "@/contexts/favoritesContexts";
import { Text, View } from "@/components/Themed";
const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  const { favorites } = useFavorites();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.favList}>
          {favorites.length === 0 ? (
            <Text style={styles.emptyMessage}>You dont have any Favorites</Text>
          ) : (
            favorites.map((item) => (
              <Link
                href={{
                  pathname: "/movieDetail",
                  params: {
                    id: item.id,
                    title: item.title,
                    imgUrl: item.posterURL,
                  },
                }}
                asChild
              >
                <Pressable>
                  <View style={styles.card}>
                    <Image
                      source={{ uri: item.posterURL }}
                      style={styles.poster}
                    />
                  </View>
                </Pressable>
              </Link>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width,
  },
  favList: {
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
