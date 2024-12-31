import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useColorScheme,
  ActivityIndicator,
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

const IaGuestMessage = ({ message }: any) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  // Typing effect ===========================================================
  const [displayedText, setDisplayedText] = useState(""); // Texto progresivo
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const typeText = (text: string, index: number) => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        typingTimeout = setTimeout(() => typeText(text, index + 1), 20); // 50ms entre cada caracter
      } else {
        setIsTyping(false); // Finalizó la escritura
      }
    };

    typeText(message.content, 0);

    return () => clearTimeout(typingTimeout); // Limpiar timeout al desmontar
  }, [message.content]);

  // Speech implementation ==================================================

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSpeech = () => {
    if (isPlaying) {
      Speech.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      Speech.speak(message.content, {
        onDone: () => {
          console.log("Lectura terminada");
          setIsPlaying(false);
        },
        onStopped: () => {
          console.log("Lectura detenida");
          setIsPlaying(false);
        },
        language: "es-ES",
      });
    }
  };
  const [updateMessage] = useMutation(UPDATE_MESSAGE);

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

  if (message._id === "loading") {
    return (
      <View style={styles(activeColors).loadingContainer}>
        <Image
          source={require("./../assets/images/writing.gif")}
          style={styles(activeColors).loadingGif}
        />
      </View>
    );
  }

  return (
    <View style={styles(activeColors).iaMessage}>
      <View style={styles(activeColors).container}>
        <Avatar.Image
          source={require("../assets/images/logojpg.png")}
          size={32}
        />
        <Text style={styles(activeColors).text}>{displayedText}</Text>
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
      </View>
      {isTyping ? (
        <Image
          source={require("./../assets/images/writing.gif")}
          style={styles(activeColors).loadingGif}
        />
      ) : null}
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
    loadingContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
    },
    loadingGif: {
      width: 150,
      height: 150,
    },
  });

export default IaGuestMessage;
