// components/CustomHeader.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// interface CustomHeaderProps {
//   title: string;
// }

const FavoriteHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { marginVertical: insets.top }]}>
      <Text style={styles.favHeaderText}> FAVORITE LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    backgroundColor: "rgba(245, 245, 245, 0.1)",
    padding: 10,
  },
  favHeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FavoriteHeader;
