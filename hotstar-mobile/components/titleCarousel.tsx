import React, { FC } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { MovieData } from "@/data/movieData"; // Ensure this path is correct

interface SnapCarouselProps {
  data: MovieData[];
  onSnapToItem: (index: number) => void;
}

const SnapCarousel: FC<SnapCarouselProps> = ({ data, onSnapToItem }) => {
  return (
    <Swiper style={styles.wrapper} showsButtons>
      {data.map((item, index) => (
        <View style={styles.card} key={index}>
          <Image source={{ uri: item.titleImg }} style={styles.titleImage} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get("window").height * 0.4, // Adjust height as needed
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  titleImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  mName: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
});

export default SnapCarousel;
