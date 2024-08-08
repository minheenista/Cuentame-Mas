import { Tabs } from "expo-router";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import explore from "./explore";
import HomeScreen from ".";
import { Dimensions } from "react-native";

export default function TabLayout() {
  const { width } = Dimensions.get("window");
  const colorScheme = useColorScheme();

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />

      <Drawer.Screen
        name="Feed"
        component={explore}
        options={{
          headerTitle: "Cuentame +",
          headerShown: width < 800 ? true : false,
        }}
      />
    </Drawer.Navigator>
  );
}
