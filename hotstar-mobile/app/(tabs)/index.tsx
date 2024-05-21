import React from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image source={require("@/assets/images/favicon.png")}></Image>
        </View>
        <View style={styles.container2}>
          <Image source={require("@/assets/images/favicon.png")}></Image>
        </View>
        <View style={styles.container2}>
          <Image source={require("@/assets/images/favicon.png")}></Image>
        </View>
        <View style={styles.container2}>
          <Image source={require("@/assets/images/favicon.png")}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,

    paddingVertical: 20,
  },
  container: {
    flex: 3,
    width: "100%",
    height: 400,
    alignItems: "center",
    backgroundColor: "red",
  },
  container2: {
    flex: 1,
    width: "100%",
    height: 200,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "white",
  },
  itemContainer: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  itemText: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
});
