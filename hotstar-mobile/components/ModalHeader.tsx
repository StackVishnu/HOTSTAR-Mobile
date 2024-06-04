// components/CustomHeader.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
// interface CustomHeaderProps {
//   title: string;
// }

const DetailedHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Entypo name="cross" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    marginLeft: width * 0.85,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },

  backBtn: {},
});

export default DetailedHeader;
