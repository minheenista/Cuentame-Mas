import { Tabs } from "expo-router";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import explore from "./explore";
import HomeScreen from ".";
import { Dimensions } from "react-native";
import FaqScreen from "./faq";
import CuentameMasScreen from "./cuentamemas";
import TermsOfServiceScreen from "./tos";
import PrivacyScreen from "./privacy";

export default function TabLayout() {
  const { width } = Dimensions.get("window");
  const colorScheme = useColorScheme();

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="CuentameMas">
      <Drawer.Screen
        name="CuentameMas"
        component={CuentameMasScreen}
        options={{
          headerTitle: "Cuentame +",
          headerShown: width < 800 ? true : false,
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Cuentame +",
          headerShown: width < 800 ? true : false,
        }}
      />

      <Drawer.Screen
        name="Explore"
        component={explore}
        options={{
          headerTitle: "Cuentame +",
          headerShown: width < 800 ? true : false,
        }}
      />
      <Drawer.Screen
        name="Preguntas Frecuentes"
        component={FaqScreen}
        options={{
          headerTitle: "Cuentame +",
          headerShown: width < 800 ? true : false,
        }}
      />
      <Drawer.Screen
        name="Terminos y Condiciones"
        component={TermsOfServiceScreen}
        options={{
          headerTitle: "Cuentame +",
          headerShown: width < 800 ? true : false,
        }}
      />
      <Drawer.Screen
        name="Politicas de Privacidad"
        component={PrivacyScreen}
        options={{
          headerTitle: "Cuentame +",
          headerShown: width < 800 ? true : false,
        }}
      />
    </Drawer.Navigator>
  );
}
