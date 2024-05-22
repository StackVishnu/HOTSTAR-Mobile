import React, { FC } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { MovieData } from "@/data/movieData"; // Ensure this path is correct
const { width, height } = Dimensions.get("window");

interface SnapCarouselProps {
  data: MovieData[];
  onSnapToItem: (index: number) => void;
  //   bgImageUrl: string;
}

const SnapCarousel: FC<SnapCarouselProps> = ({
  data,
  onSnapToItem,
  //   bgImageUrl,
}) => {
  const renderItem = ({ item, index }: { item: MovieData; index: number }) => (
    <View style={styles.card} key={index}>
      <Image source={{ uri: item.titleImg }} style={styles.titleImage} />
      <Text style={styles.mName}>{item.mDetails}</Text>
    </View>
  );

  return (
    <SwiperFlatList
      style={styles.wrapper}
      autoplay
      autoplayDelay={3}
      autoplayLoop
      index={1}
      showPagination
      data={data}
      renderItem={renderItem}
      onChangeIndex={({ index }) => onSnapToItem(index)}
      paginationStyleItem={styles.paginationDot}
      paginationStyleItemActive={styles.paginationDotActive}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.4, // Adjust height as needed
  },
  card: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 1)",
    width,
    borderRadius: 5,
    marginBottom: 40,
  },
  titleImage: {
    height: height * 0.14,
    width,
    marginBottom: 5,
    resizeMode: "contain",
  },
  mName: {
    color: "white",
    fontSize: 17,
    marginTop: 5,
    marginBottom: 90,
  },

  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust color and opacity as needed
    // Adjust the position of the dots vertically
  },
  paginationDotActive: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,

    backgroundColor: "white", // Adjust color as needed
    // Adjust the position of the dots vertically
  },
});

export default SnapCarousel;
