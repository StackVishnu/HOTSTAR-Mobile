import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import CustomHeader from "@/components/CustomHeader";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
type ImgHeaderProps = {
  src: any;
  style?: object;
};
function ImageHeader({ src, style }: ImgHeaderProps) {
  return <Image source={src} style={style} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const headerImgSrc = require("@/assets/images/disney-logo.png");
  const headerImgStyle = styles.headerImg;

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
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
