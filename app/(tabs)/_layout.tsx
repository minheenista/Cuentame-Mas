import { Tabs } from "expo-router";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import explore from "./explore";
import HomeScreen from ".";
import { Dimensions, View, Image, Text, StyleSheet } from "react-native";
import FaqScreen from "./faq";
import CuentameMasScreen from "./cuentamemas";
import TermsOfServiceScreen from "./tos";
import PrivacyScreen from "./privacy";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const { width } = Dimensions.get("window");
  const colorScheme = useColorScheme();

  const Drawer = createDrawerNavigator();

  return (
    /* TODO: Add title to drawer */
    <Drawer.Navigator
      initialRouteName="CuentameMas"
      screenOptions={{
        drawerActiveBackgroundColor: Colors.light.primaryLight,
        drawerActiveTintColor: Colors.light.text,
        drawerInactiveTintColor: Colors.light.onPrimary,
        drawerContentStyle: {
          backgroundColor: Colors.light.primary,
        },
        drawerLabelStyle: {
          fontFamily: "Poppins-Regular", // Reemplaza 'YourCustomFont' con la fuente que quieras usar
          fontSize: 14, // Ajusta el tamaño de la fuente si es necesario
        },
        headerStyle: {
          backgroundColor: Colors.light.primary, // Set header background color to pink
        },
        /*         drawerPosition: "right", TODO: Mover a la derecha
         */

        headerTintColor: Colors.light.onPrimary, // Set header text color to white
      }}
    >
      <Drawer.Screen
        name="CuentameMas"
        component={CuentameMasScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          drawerLabel: "Menú Principal",

          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")} // Replace with the path to your image
              />
              <Text style={styles.title}>Cuéntame +</Text>
            </View>
          ),
          headerShown: width < 800 ? true : false,
        }}
      />
      <Drawer.Screen
        name="faq"
        component={FaqScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={size}
              color={color}
            />
          ),
          drawerLabel: "Preguntas Frecuentes",
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")} // Replace with the path to your image
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
          headerShown: width < 800 ? true : false,
        }}
      />
      <Drawer.Screen
        name="tos"
        component={TermsOfServiceScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={size}
              color={color}
            />
          ),
          drawerLabel: "Términos y Condiciones",
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")} // Replace with the path to your image
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
          headerShown: width < 800 ? true : false,
        }}
      />
      <Drawer.Screen
        name="privacy"
        component={PrivacyScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shield-lock"
              size={size}
              color={color}
            />
          ),
          drawerLabel: "Políticas de Privacidad",
          headerTitle: () => (
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("./../../assets/images/logo.png")} // Replace with the path to your image
              />
              <Text style={styles.title}>Cuentame +</Text>
            </View>
          ),
          headerShown: width < 800 ? true : false,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
  },
});
