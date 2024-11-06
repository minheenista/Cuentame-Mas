// LeftDrawer.js
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  FlatList,
  Pressable,
  Easing,
  useColorScheme,
} from "react-native";
import BlackButton from "./BlackButton";
import PinkButton from "./PinkButton";

const ItemDrawer = ({
  icon,
  name,
  route,
}: {
  icon: any;
  name: any;
  route: any;
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <View>
      <Pressable
        style={styles(activeColors).item}
        onPress={() => router.navigate(route)}
      >
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={activeColors.onBackground}
        ></MaterialCommunityIcons>
        <Text style={styles(activeColors).textDrawer}> {name}</Text>
      </Pressable>
    </View>
  );
};

const drawerWidth = 250;

const MenuGuestDrawer = ({
  isVisible,
  toggleDrawer,
}: {
  isVisible: any;
  toggleDrawer: any;
}) => {
  const animatedValue = useRef(
    new Animated.Value(isVisible ? 0 : drawerWidth)
  ).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isVisible ? 0 : -drawerWidth,
      duration: 300, // Duración más corta para una animación rápida
      easing: Easing.out(Easing.circle), // Efecto de suavizado
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <Animated.View
      style={[
        styles(activeColors).drawer,
        { transform: [{ translateX: animatedValue }] },
      ]}
    >
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles(activeColors).closeButton}>X</Text>
      </TouchableOpacity>

      {/* ====================== SIDEBAR TITLE =============================== */}
      <View style={styles(activeColors).sidebarHeader}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={styles(activeColors).logo}
        ></Image>
        <Text style={styles(activeColors).title}> Cuentame +</Text>
      </View>
      <View>
        <ItemDrawer
          icon={"home"}
          name={"Menú Principal"}
          route={"/"}
        ></ItemDrawer>
        <ItemDrawer
          icon={"frequently-asked-questions"}
          name={"Preguntas Frecuentes"}
          route={"/faq"}
        ></ItemDrawer>
        <ItemDrawer
          icon={"file-document"}
          name={"Términos y Condiciones"}
          route={"/tos"}
        ></ItemDrawer>
        <ItemDrawer
          icon={"shield-lock"}
          name={"Políticas de Privacidad"}
          route={"/privacy"}
        ></ItemDrawer>
      </View>
      <View style={styles(activeColors).sidebarFooter}>
        {isDarkMode ? (
          <PinkButton
            handlePress={() => router.navigate("/login")}
            title="Iniciar Sesión"
            isLoading={false}
          ></PinkButton>
        ) : (
          <BlackButton
            handlePress={() => router.navigate("/login")}
            title="Iniciar Sesión"
            isLoading={false}
          ></BlackButton>
        )}
      </View>
    </Animated.View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    drawer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 1000,
      width: drawerWidth,
      backgroundColor: activeColors.primaryDark,
      shadowColor: activeColors.cardShadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      padding: 20,
    },
    closeButton: {
      marginTop: 20,
      textAlign: "right",
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "Poppins-Bold",
      color: activeColors.text,
    },
    sidebarHeader: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    title: {
      fontFamily: "Poppins-Bold",
      color: activeColors.lightTitle,
      fontSize: 26,
    },
    logo: {
      width: 60,
      height: 60,
    },
    sidebarFooter: {
      marginTop: "auto",
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    textDrawer: {
      fontFamily: "Poppins-Regular",
      fontSize: 12,
      color: activeColors.text,
    },
    item: {
      alignContent: "center",
      verticalAlign: "middle",
      alignItems: "center",
      gap: 10,
      padding: 10,
      flexDirection: "row",
    },
  });

export default MenuGuestDrawer;
