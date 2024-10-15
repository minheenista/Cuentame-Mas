import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useFonts } from "@/hooks/useFonts";

import { View, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Buscar pregunta"
        style={styles.input}
        outlineColor={Colors.light.textHint}
        theme={{
          colors: {
            primary: Colors.light.primary,
            text: Colors.light.text,
            placeholder: Colors.light.text,
            background: Colors.light.background,
          },
          fonts: {
            regular: { fontFamily: "Poppins-Regular" },
          },
        }}
        outlineStyle={{ borderRadius: 20 }}
        underlineStyle={{ backgroundColor: "transparent" }}
        left={<TextInput.Icon icon={"magnify"} color={Colors.light.primary} />}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  input: {
    width: "80%",
    height: 50,
    fontFamily: "Poppins-Regular",
  },
});

export default SearchInput;
