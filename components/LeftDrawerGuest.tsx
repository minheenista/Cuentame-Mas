// LeftDrawer.js
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
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
} from "react-native";
import { Avatar, Divider, Menu } from "react-native-paper";
import { fontConfig } from "react-native-paper/lib/typescript/styles/fonts";
import BlackButton from "./BlackButton";

const ItemDrawer = ({
  icon,
  name,
  route,
  navigation,
}: {
  icon: any;
  name: any;
  route: any;
  navigation: any;
}) => {
  return (
    <View>
      <Pressable style={styles.item} onPress={() => navigation.navigate(route)}>
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={Colors.light.onBackground}
        ></MaterialCommunityIcons>
        <Text style={styles.textDrawer}> {name}</Text>
      </Pressable>
    </View>
  );
};

const { width } = Dimensions.get("window");
const drawerWidth = 250;

const LeftDrawerGuest = ({
  isVisible,
  toggleDrawer,
  navigation,
}: {
  isVisible: any;
  toggleDrawer: any;
  navigation: any;
}) => {
  const animatedValue = new Animated.Value(isVisible ? 0 : -drawerWidth);

  Animated.timing(animatedValue, {
    toValue: isVisible ? 0 : -drawerWidth,
    duration: 300,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateX: animatedValue }] }]}
    >
      <TouchableOpacity onPress={toggleDrawer}>
        <Text style={styles.closeButton}>X</Text>
      </TouchableOpacity>

      {/* ====================== SIDEBAR TITLE =============================== */}
      <View style={styles.sidebarHeader}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.title}> Cuentame +</Text>
      </View>
      <View>
        <ItemDrawer
          icon={"home"}
          name={"Menú Principal"}
          route={"CuentameMas"}
          navigation={navigation}
        ></ItemDrawer>
        <ItemDrawer
          icon={"frequently-asked-questions"}
          name={"Preguntas Frecuentes"}
          route={"faq"}
          navigation={navigation}
        ></ItemDrawer>
        <ItemDrawer
          icon={"file-document"}
          name={"Términos y Condiciones"}
          route={"tos"}
          navigation={navigation}
        ></ItemDrawer>
        <ItemDrawer
          icon={"shield-lock"}
          name={"Políticas de Privacidad"}
          route={"privacy"}
          navigation={navigation}
        ></ItemDrawer>
      </View>
      <View style={styles.sidebarFooter}>
        <BlackButton
          handlePress={() => navigation.navigate("login")}
          title="Iniciar Sesión"
          isLoading={false}
        ></BlackButton>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    width: drawerWidth,
    backgroundColor: Colors.light.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
  },
  closeButton: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },

  sidebar: {
    width: "auto",
    backgroundColor: Colors.light.primary,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  sidebarHeader: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Poppins-Bold",
    color: Colors.light.onPrimary,
    fontSize: 26,
  },
  logo: {
    width: 60,
    height: 60,
  },
  buttonCreate: {
    padding: 10,
    borderRadius: 8,
    color: Colors.light.onPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  subtitle2: {
    marginVertical: 15,
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: Colors.light.text,
  },
  chatItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  chatItem: {
    flex: 1,
  },
  chatName: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: Colors.light.text,
  },
  menuButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  menuButtonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#333",
  },
  sidebarFooter: {
    marginTop: "auto",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  body1: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: Colors.light.text,
  },
  textDrawer: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: Colors.light.text,
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

export default LeftDrawerGuest;
