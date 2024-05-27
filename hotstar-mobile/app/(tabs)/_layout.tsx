import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import CustomHeader from "@/components/CustomHeader";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import FavoriteHeader from "@/components/FavoriteModal";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={24} color={color} />
          ),
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <AntDesign name="star" size={24} color={color} />
          ),
          header: () => <FavoriteHeader />,
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  headerImg: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  subscribeButton: {
    marginRight: 5,
    padding: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    borderRadius: 3,
    borderColor: "#FFA500",
    borderStyle: "solid",
    borderWidth: 1,
  },
  subscribeText: {
    padding: 1,
    fontSize: 12,
    color: "#FFA500",
    fontWeight: "bold",
  },
});
