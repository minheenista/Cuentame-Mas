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
import { gql, useMutation } from "@apollo/client";

const DELETE_BOOKMARK = gql`
  mutation UpdateMessageData($input: UpdateMessageInput!) {
    updateMessageData(input: $input) {
      _id
      chatId
      role
      content
      bookmark
      rated
      createdAt
      updatedAt
    }
  }
`;

const IaMessageBookmark = ({ message, id }: any) => {
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

  const [deleteBookmark] = useMutation(DELETE_BOOKMARK);

  const handleDeleteBookmark = async (id: any) => {
    try {
      const { data } = await deleteBookmark({
        variables: {
          input: {
            userMessageId: id,
            bookmark: false,
          },
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
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
            handleDeleteBookmark(id);
          }}
        >
          <MaterialCommunityIcons
            name="bookmark"
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
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    text: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
      flexShrink: 1,
    },
    buttons: {
      gap: 10,
      flexDirection: "row",
      justifyContent: "flex-end",
      padding: 10,
    },
  });

export default IaMessageBookmark;
