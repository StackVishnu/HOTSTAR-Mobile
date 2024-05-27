import React, { FC } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
// import { SpecialData, specialCardsData } from "@/data/spclData";
const { width, height } = Dimensions.get("window");

interface BrandCardProps {
  img: ImageSourcePropType;
}

const BrandCard: React.FC<BrandCardProps> = ({ img }) => {
  return (
    <View>
      <Image source={img} style={styles.brandCard} />
    </View>
  );
};
const styles = StyleSheet.create({
  brandCard: {
    height: 70,
    width: width * 0.3,
    objectFit: "contain",
    backgroundColor: "rgba(40, 40, 40, 1)",
    borderRadius: 4,
  },
});
export default BrandCard;
