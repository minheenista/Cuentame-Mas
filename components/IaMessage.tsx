import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import { Avatar } from "react-native-paper";
import * as Speech from "expo-speech";
import { useState } from "react";

const IaMessage = ({ message }: any) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSpeech = () => {
    if (isPlaying) {
      Speech.stop();
      setIsPlaying(false);
    } else {
      Speech.speak(message);
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles(activeColors).iaMessage}>
      <View style={styles(activeColors).container}>
        <Avatar.Image
          source={require("../assets/images/logojpg.png")}
          size={32}
        />
        <Text style={styles(activeColors).text}>{message}</Text>
      </View>
      <View style={styles(activeColors).buttons}>
        <Pressable onPress={toggleSpeech}>
          <MaterialCommunityIcons
            name={isPlaying ? "pause" : "volume-high"}
            size={24}
            color={activeColors.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("like");
          }}
        >
          <MaterialCommunityIcons
            name="thumb-up-outline"
            size={24}
            color={activeColors.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("dislike");
          }}
        >
          <MaterialCommunityIcons
            name="thumb-down-outline"
            size={24}
            color={activeColors.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("Guardar");
          }}
        >
          <MaterialCommunityIcons
            name="bookmark-outline"
            size={24}
            color={activeColors.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>
      </View>
    </View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    iaMessage: {
      flexDirection: "column",
      margin: 10,
      marginBottom: 0,
      borderColor: activeColors.primary,
      borderWidth: 2,
      width: "95%",
      borderRadius: 10,
    },
    container: {
      alignSelf: "flex-start",
      alignContent: "center",
      verticalAlign: "middle",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 10,
      padding: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    text: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      flex: 1,
      color: activeColors.text,
      flexGrow: 1,
    },
    buttons: {
      gap: 10,
      flexDirection: "row",
      justifyContent: "flex-end",
      padding: 10,
    },
  });

export default IaMessage;
