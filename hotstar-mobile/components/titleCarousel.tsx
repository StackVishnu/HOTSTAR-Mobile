import React, { FC } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { MovieData, titleData } from "@/data/movieData";

interface SnapCarouselProps {
  data: MovieData[];
  onSnapToItem: (index: number) => void;
}

const SnapCarousel: FC<SnapCarouselProps> = ({ data, onSnapToItem }) => {
  const renderItem = ({ item, index }: { item: MovieData; index: number }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.titleImg }} style={styles.titleImage} />
      <Text style={styles.mName}>{item.mName}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={Dimensions.get("window").width}
      itemWidth={300}
      loop
      autoplay
      autoplayInterval={3000}
      onSnapToItem={onSnapToItem}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
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
