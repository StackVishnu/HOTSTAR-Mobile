import React from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";

const headerImgSrc = require("@/assets/images/disney-logo.png");

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      <Image source={headerImgSrc} style={styles.headerImg} />
      <Link href="/modal" asChild>
        <Pressable style={styles.subscribeButton}>
          {({ pressed }) => (
            <Text style={[styles.subscribeText, pressed && { opacity: 0.5 }]}>
              Subscribe
            </Text>
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: StatusBar.currentHeight,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent background
    padding: 10,

    zIndex: 1, // Ensure the header is on top of the content
  },
  headerImg: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  subscribeButton: {
    marginRight: 5,
    padding: 3,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    borderRadius: 5,
    borderColor: "#FFA500",
    borderStyle: "solid",
    borderWidth: 1,
  },
  subscribeText: {
    fontSize: 12,
    color: "#FFA500",
    fontWeight: "bold",
  },
});
