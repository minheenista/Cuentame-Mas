import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavBar from "@/components/NavBar";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import MenuGuestDrawer from "@/components/MenuGuestDrawer";
import { useEffect, useRef, useState } from "react";
import React from "react";
import ReferencesDrawer from "@/components/ReferencesDrawer";
import PreguntasPreguntadas from "@/components/PreguntasPreguntadas";
import UserMessage from "@/components/UserMessage";
import IaMessage from "@/components/IaMessage";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { gql, useMutation, useQuery } from "@apollo/client";
import IaGuestMessage from "@/components/IaGuestMessage";

const GET_GUEST_MESSAGES = gql`
  query GetChatMessages(
    $orderBy: String!
    $limit: Int!
    $chatId: String!
    $sessionId: String
    $desc: Boolean
  ) {
    getChatMessages(
      orderBy: $orderBy
      limit: $limit
      chatId: $chatId
      sessionId: $sessionId
      desc: $desc
    ) {
      items {
        _id
        chatId
        role
        content
        rated
        sessionId
        createdAt
        updatedAt
      }
      totalItemsCount
    }
  }
`;

const CREATE_GUEST_MESSAGE = gql`
  mutation CreateGuestMessage($input: CreateGuestMessageInput!) {
    createGuestMessage(input: $input) {
      _id
      chatId
      role
      content
      rated
      sessionId
      createdAt
      updatedAt
    }
  }
`;

export default function guestScreen() {
  const { width } = Dimensions.get("window");

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  const [isLeftDrawerVisible, setLeftDrawerVisible] = useState(false);
  const [isRightDrawerVisible, setRightDrawerVisible] = useState(false);

  const toggleLeftDrawer = () => {
    setLeftDrawerVisible(!isLeftDrawerVisible);
  };

  const toggleRightDrawer = () => {
    setRightDrawerVisible(!isRightDrawerVisible);
  };

  // Preguntas preguntadas
  const [inputValue, setInputValue] = useState("");

  const handlePregunta = (texto: any) => {
    setInputValue(texto);
  };

  // Microfono
  const [isListening, setIsListening] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // TODO: Configurar Micro en movil
  /* if (!browserSupportsSpeechRecognition) {
    return <Text>Browser doesn't support speech recognition.</Text>;
  } */

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  const toggleSpeech = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    } else {
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
    }
  };

  // Session Id
  const { session, chat } = useLocalSearchParams();

  // obtener mensajes
  interface Message {
    _id: string;
    role: string;
    content: string;
  }
  const scrollViewRef = useRef<ScrollView>(null);

  const [messages, setMessages] = useState<Message[]>([]);

  const { data, refetch } = useQuery(GET_GUEST_MESSAGES, {
    variables: {
      orderBy: "created_at",
      limit: 100,
      chatId: chat,
      sessionId: session,
      desc: false,
    },
    onCompleted: (data) => {
      if (data?.getChatMessages?.items) {
        setMessages(data.getChatMessages.items);
      }
    },
  });

  useEffect(() => {
    if (session && chat) {
      refetch();
    }
  }, [session, chat]);

  useEffect(() => {
    if (messages.length > 0) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  // Enviar mensaje
  const [isLoading, setIsLoading] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [createGuestMessage] = useMutation(CREATE_GUEST_MESSAGE);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      _id: Date.now().toString(), // ID temporal para mostrar en la lista
      role: "USER",
      content: inputValue,
    };

    // Añade el mensaje del usuario localmente
    setMessages((prev) => [...prev, userMessage]);

    // Limpia el campo de texto
    setInputValue("");

    // Añade un mensaje de carga
    const loadingMessage = {
      _id: "loading",
      role: "IA",
      content: "",
    };
    setMessages((prev) => [...prev, loadingMessage]);

    // Muestra el mensaje de carga
    setIsLoading(true);

    console.log(session);

    try {
      const response = await createGuestMessage({
        variables: {
          input: {
            sessionId: session,
            content: inputValue,
            role: "USER",
          },
        },
      });
      if (response) {
        const iaMessage = {
          _id: response.data.createGuestMessage[1]._id,
          role: "IA",
          content: response.data.createGuestMessage[1].content,
          isNew: true, // Indicar que es un mensaje nuevo
        };

        // Actualiza los mensajes reemplazando el "loading" por el mensaje de la IA
        setMessages((prev) =>
          prev.map((msg) => (msg._id === "loading" ? iaMessage : msg))
        );

        console.log(data);
        refetch();
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages((prev) => prev.filter((msg) => msg._id !== "loading"));
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Desplázate hacia abajo cuando cambien los mensajes
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <SafeAreaView style={styles(activeColors).safeArea}>
      <MenuGuestDrawer
        isVisible={isLeftDrawerVisible}
        toggleDrawer={toggleLeftDrawer}
      />
      <ReferencesDrawer
        isVisible={isRightDrawerVisible}
        toggleDrawer={toggleRightDrawer}
      />

      {width < 880 ? (
        <View style={styles(activeColors).headerMobile}>
          <View style={styles(activeColors).headerMobile2}>
            <TouchableOpacity onPress={toggleLeftDrawer}>
              <MaterialCommunityIcons
                name="menu"
                size={24}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
            <Image
              source={require("./../../assets/images/logo.png")}
              style={styles(activeColors).logoHeader}
            ></Image>
            <Pressable onPress={() => router.navigate("/")}>
              <Text style={styles(activeColors).titleHeader}>Cuentame +</Text>
            </Pressable>
          </View>
          {/* =============== BOTON DE REFERENCIAS - SOLO MOSTRAR SI HAY PREGUNTAS EN MOVIL*/}
          <TouchableOpacity onPress={toggleRightDrawer}>
            <MaterialCommunityIcons
              name="text-search"
              size={24}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      ) : null}
      {width > 880 ? <NavBar></NavBar> : null}

      <View style={styles(activeColors).container}>
        {/* ===============================   CHATS ================================= */}
        <View style={styles(activeColors).cardContainer}>
          <View style={{ flexDirection: "row-reverse", flex: 1 }}>
            {width > 880 && messages.length > 0 ? (
              <TouchableOpacity
                onPress={toggleRightDrawer}
                style={{ maxWidth: 24, width: 24, margin: 10, flex: 1 }}
              >
                <MaterialCommunityIcons
                  name="text-search"
                  size={24}
                  color={activeColors.text}
                ></MaterialCommunityIcons>
              </TouchableOpacity>
            ) : null}

            <View style={styles(activeColors).card}>
              <ScrollView style={{ gap: 20 }} ref={scrollViewRef}>
                {messages.length > 0 ? (
                  messages.map((msg) =>
                    msg.role === "USER" ? (
                      <UserMessage message={msg.content} key={msg._id} />
                    ) : (
                      <IaGuestMessage
                        message={msg}
                        isNew={isNew}
                        key={msg._id}
                      />
                    )
                  )
                ) : (
                  <PreguntasPreguntadas
                    onPressPregunta={handlePregunta}
                  ></PreguntasPreguntadas>
                )}
              </ScrollView>
            </View>
          </View>

          {/* ================= INPUT TEXT =============================== */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              style={{ flex: 1, height: 50, flexShrink: 0 }}
              mode="outlined"
              disabled={isLoading}
              label={"Ingresa tu pregunta"}
              outlineColor={activeColors.secondaryDark}
              theme={{
                colors: {
                  primary: activeColors.secondaryDark,
                  text: activeColors.text,
                  placeholder: Colors.light.text,
                  background: activeColors.background,
                  onSurface: activeColors.text,
                  //TODO: CHANGE LABEL COLOR ACTIVE
                },
                fonts: {
                  regular: { fontFamily: "Poppins-Regular" },
                },
              }}
              outlineStyle={{ borderRadius: 10, borderWidth: 2 }}
              underlineStyle={{ backgroundColor: "transparent" }}
              left={
                <TextInput.Icon
                  icon="pencil"
                  color={activeColors.secondaryDark}
                />
              }
              right={
                <TextInput.Icon
                  icon={isListening ? "microphone-off" : "microphone"}
                  color={activeColors.textSecondary}
                  disabled={isLoading}
                  onPress={() => {
                    toggleSpeech();
                  }}
                />
              }
            ></TextInput>

            {/* =================== SEND BUTTON =================== */}
            <View style={styles(activeColors).sendButton}>
              <TouchableOpacity
                onPress={() => handleSend()}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator
                    animating={true}
                    color={activeColors.secondaryDark}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="send"
                    color={activeColors.secondaryDark}
                    size={24}
                  ></MaterialCommunityIcons>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = (activeColors: any) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: activeColors.background,
    },
    headerMobile: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      gap: 10,
      backgroundColor: activeColors.primary,
    },
    headerMobile2: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 10,
    },
    container: {
      margin: 10,
      flex: 1,
      flexDirection: "row",
    },
    sidebar: {
      width: 350,
      backgroundColor: activeColors.primary,
      padding: 20,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: "center",
      padding: 16,
    },
    cardContainer: {
      flex: 1,
      flexGrow: 1,
      marginHorizontal: 10,
    },
    card: {
      flex: 1,
      minHeight: "99%",
      height: "99%",
      flexGrow: 3,
      backgroundColor: activeColors.card,
      padding: 20,
      marginBottom: 15,
      borderRadius: 8,
      shadowColor: activeColors.cardShadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    titleHeader: {
      fontFamily: "Poppins-Bold",
      color: Colors.light.onPrimary,
      fontSize: 24,
    },
    logoHeader: {
      width: 50,
      height: 50,
    },
    sendButton: {
      height: 50,
      width: 50,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 10,
      borderColor: Colors.light.secondaryDark,
      borderWidth: 2,
      padding: 10,
      marginLeft: 10,
    },
  });
