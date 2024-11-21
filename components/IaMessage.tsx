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
import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const UPDATE_MESSAGE = gql`
  mutation UpdateMessage($input: UpdateMessageInput!) {
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

const ME = gql`
  query Me {
    me {
      chats {
        _id
        messages {
          _id
          chatId
          content
          bookmark
          rated
        }
      }
    }
  }
`;

const IaMessage = ({ message }: any) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  // Speech implementation ==================================================

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSpeech = () => {
    if (isPlaying) {
      Speech.stop();
      setIsPlaying(false);
    } else {
      Speech.speak(message);
      setIsPlaying(true);
    } //TODO: IMplementar que se cambie el icono al terminar de leer
  };

  // Bookmark a message ======================================================
  const [isBookmarked, setIsBookmarked] = useState(message.bookmark);

  const [updateMessage] = useMutation(UPDATE_MESSAGE);

  const handleBookmark = async () => {
    try {
      const { data } = await updateMessage({
        variables: {
          input: {
            messageId: message._id,
            bookmark: !isBookmarked,
          },
        },
      });
      if (data) {
        console.log("Mensaje actualizado");
        setIsBookmarked(!isBookmarked);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // rate a message ==========================================================
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  useEffect(() => {
    if (message.rated === "GOOD") {
      setIsLiked(true);
      setIsDisliked(false);
    } else if (message.rated === "BAD") {
      setIsLiked(false);
      setIsDisliked(true);
    }
  }, [message.rated]);

  const handleRate = async (rate: string) => {
    const newRate =
      (rate === "GOOD" && isLiked) || (rate === "BAD" && isDisliked)
        ? "EMPTY" // Si ya estaba seleccionado, se alterna a "EMPTY"
        : rate;

    try {
      const { data } = await updateMessage({
        variables: {
          input: {
            messageId: message._id,
            rated: newRate,
          },
        },
      });
      if (data) {
        rate = data.updateMessageData.rated;
        if (rate === "GOOD") {
          setIsLiked(true);
          setIsDisliked(false);
        } else if (rate === "BAD") {
          setIsLiked(false);
          setIsDisliked(true);
        } else if (rate === "EMPTY") {
          setIsLiked(false);
          setIsDisliked(false);
        }
      }
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
        <Text style={styles(activeColors).text}>{message.content}</Text>
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
            handleRate("GOOD");
          }}
        >
          <MaterialCommunityIcons
            name={isLiked ? "thumb-up" : "thumb-up-outline"}
            size={24}
            color={activeColors.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>
        <Pressable
          onPress={() => {
            handleRate("BAD");
          }}
        >
          <MaterialCommunityIcons
            name={isDisliked ? "thumb-down" : "thumb-down-outline"}
            size={24}
            color={activeColors.textSecondary}
          ></MaterialCommunityIcons>
        </Pressable>
        <Pressable
          onPress={() => {
            handleBookmark();
          }}
        >
          <MaterialCommunityIcons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
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
