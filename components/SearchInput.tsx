import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useFonts } from "@/hooks/useFonts";

import { View, StyleSheet, Dimensions, useColorScheme } from "react-native";
import { TextInput } from "react-native-paper";

const SearchInput = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];
  return (
    <View style={styles(activeColors).container}>
      <TextInput
        mode="outlined"
        placeholder="Buscar pregunta"
        style={styles(activeColors).input}
        outlineColor={activeColors.primary}
        theme={{
          colors: {
            primary: activeColors.primary,
            text: activeColors.text,
            placeholder: activeColors.text,
            background: "transparent",
            onSurface: activeColors.text,
          },
          fonts: {
            regular: { fontFamily: "Poppins-Regular" },
          },
        }}
        outlineStyle={{ borderRadius: 20 }}
        underlineStyle={{ backgroundColor: "transparent" }}
        left={<TextInput.Icon icon={"magnify"} color={activeColors.primary} />}
      ></TextInput>
    </View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },

    input: {
      color: activeColors.text,
      width: "80%",
      height: 50,
      fontFamily: "Poppins-Regular",
    },
  });

export default SearchInput;
