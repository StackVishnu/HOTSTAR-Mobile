import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { useFavorites } from "@/contexts/favoritesContexts";
import { Text, View } from "@/components/Themed";
import Row from "@/components/RowComponent";
const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  const { favorites } = useFavorites();

  const favoritesList = favorites
    .map((fav) => `${fav.title} (${fav.id})`)
    .join(", ");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.favList}>
        <Row arr={favorites} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  favList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
