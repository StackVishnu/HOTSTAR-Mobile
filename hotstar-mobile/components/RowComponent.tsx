import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { Movie } from "@/services/apiService";
import { useFavorites } from "@/contexts/favoritesContexts";

interface RowProps {
  arr: Movie[];
}

const Row: React.FC<RowProps> = ({ arr }) => {
  const renderItem = ({ item }: { item: Movie }) => {
    return (
      <Link
        href={{
          pathname: "/movieDetail",
          params: { id: item.id, title: item.title, imgUrl: item.posterURL },
        }}
        asChild
      >
        <Pressable>
          <View style={styles.card}>
            <Image source={{ uri: item.posterURL }} style={styles.poster} />
          </View>
        </Pressable>
      </Link>
    );
  };
  return (
    <FlatList
      data={arr}
      horizontal
      keyExtractor={(item, index) => `${item.id}_${index}`}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
    />
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
  listContent: {
    padding: 10,
  },
});

export default Row;
