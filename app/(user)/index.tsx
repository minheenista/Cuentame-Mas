import ChatItem from "@/components/ChatItem";
import ConfigModal from "@/components/ConfigModal";
import IaMessage from "@/components/IaMessage";
import PreguntasPreguntadas from "@/components/PreguntasPreguntadas";
import ReferencesDrawer from "@/components/ReferencesDrawer";
import SidebarDrawer from "@/components/SidebarDrawer";
import UserMessage from "@/components/UserMessage";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useColorScheme,
  ActivityIndicator,
} from "react-native";
import { Avatar, Divider, TextInput } from "react-native-paper";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { id } from "react-native-paper-dates";

const ME = gql`
  query Me {
    me {
      _id
      name
      lastname
      email
      regimenFiscal
      password
      createdAt
      updatedAt
      reminders {
        _id
        userId
        title
        description
        finishDate
        createdAt
        updatedAt
      }
      chats {
        _id
        userId
        iamodelId
        title
        createdAt
        updatedAt
        messages {
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
    }
  }
`;

const CREATE_CHAT = gql`
  mutation CreateChat($input: CreateChatInput!) {
    createChat(input: $input) {
      _id
      userId
      iamodelId
      title
      createdAt
      updatedAt
      messages {
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
  }
`;

const CREATE_MESSAGE = gql`
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
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

const EDIT_CHAT = gql`
  mutation UpdateChat($input: UpdateChatInput!) {
    updateChat(input: $input) {
      _id
      userId
      iamodelId
      title
      createdAt
      updatedAt
    }
  }
`;

export default function userScreen() {
  const { width } = Dimensions.get("window");

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  // Modal COnfiguracion ==========================================================
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  // Drawer ========================================================================
  const [isLeftDrawerVisible, setLeftDrawerVisible] = useState(false);
  const [isRightDrawerVisible, setRightDrawerVisible] = useState(false);

  const toggleLeftDrawer = () => {
    setLeftDrawerVisible(!isLeftDrawerVisible);
  };

  const toggleRightDrawer = () => {
    setRightDrawerVisible(!isRightDrawerVisible);
  };

  // Preguntas preguntadas =========================================================
  const [inputValue, setInputValue] = useState("");

  const handlePregunta = (texto: any) => {
    setInputValue(texto);
  };

  // Chats Sidebar y Mensajes =================================================================

  const scrollViewRef = useRef<ScrollView>(null);

  interface Message {
    id: string;
    role: string;
    content: string;
  }

  const [selectedChatMessages, setSelectedChatMessages] = useState<Message[]>(
    []
  );
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const handleSelectChat = (chatId: any) => {
    refetch();
    console.log("Selected Chat ID desde index:", chatId);
    const selectedChat = Chats.find((chat: any) => chat._id === chatId);
    setSelectedChatId(chatId); // Actualiza el estado
    if (selectedChat) {
      setSelectedChatMessages(selectedChat.messages || []);
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }
    if (isLeftDrawerVisible) {
      toggleLeftDrawer();
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [selectedChatMessages]);

  // Seleccionar chat desde el drawer ========================================================================
  const handleChatSelection = (chat: any) => {
    setSelectedChatMessages(chat.messages); // Actualiza el chat seleccionado
    setSelectedChatId(chat._id); // Actualiza el chat seleccionado
    if (isLeftDrawerVisible) {
      toggleLeftDrawer();
    }
  };

  // Microfono =====================================================================
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

  // Crear Chat ====================================================================
  const [createChat] = useMutation(CREATE_CHAT);
  const [isLoadingCreateChat, setIsLoadingCreateChat] = useState(false);

  const handleCreateChat = async () => {
    setIsLoadingCreateChat(true);
    try {
      const createChatData = await createChat({
        variables: {
          input: {
            title: "",
          },
        },
      });
      if (createChatData) {
        console.log("Chat creado", createChatData);
        refetch(); // Refrescar los datos del usuario
        const newChatId = createChatData.data.createChat._id;
        setSelectedChatId(newChatId); // Actualiza el estado con el nuevo ID
        handleSelectChat(newChatId);
        setSelectedChatMessages(createChatData.data.createChat.messages);
        setIsLoadingCreateChat(false);
      }
    } catch (error) {
      console.log("Error al crear chat", error);
      setIsLoadingCreateChat(false);
    }
  };

  // Editar Chat ===================================================================
  const [updateChat] = useMutation(EDIT_CHAT);

  // Crear mensaje ================================================================
  const [isLoading, setIsLoading] = useState(false);

  const [createMessage] = useMutation(CREATE_MESSAGE);

  const handleCreateMessage = async () => {
    if (!inputValue) return;
    if (!selectedChatId) {
      console.log("No hay un chat seleccionado");
      return;
    }
    console.log("Selected Chat ID desde mensaje:", selectedChatId);
    console.log("Input Value:", inputValue);

    const userMessage = {
      id: Date.now().toString(), // ID temporal
      role: "USER",
      content: inputValue,
    };
    setSelectedChatMessages((prevMessages) => [...prevMessages, userMessage]);

    // Limpia el input
    setInputValue("");

    // Añade un mensaje de carga
    const loadingMessage = {
      id: "loading",
      role: "IA",
      content: "Cargando respuesta...",
    };
    setSelectedChatMessages((prevMessages) => [
      ...prevMessages,
      loadingMessage,
    ]);

    // Muestra la animación de carga
    setIsLoading(true);

    try {
      const createdMessage = await createMessage({
        variables: {
          input: {
            chatId: selectedChatId,
            content: inputValue,
            role: "USER",
          },
        },
      });
      if (createdMessage) {
        if (selectedChatId) {
          const selectedChat = Chats.find(
            (chat: any) => chat._id === selectedChatId
          );
          if (selectedChat && selectedChat.title === "") {
            await updateChat({
              variables: {
                input: {
                  id: selectedChatId,
                  title: inputValue,
                },
              },
            });
          }
        }

        const responseMessage = {
          id: createdMessage.data.createMessage[1].id,
          role: "IA",
          content: createdMessage.data.createMessage[1].content,
        };

        setSelectedChatMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === "loading" ? responseMessage : msg
          )
        );

        console.log(createdMessage.data);
        // setInputValue("");
        refetch();
      }
    } catch (error) {
      console.log(error);
      setSelectedChatMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== "loading")
      );
    } finally {
      setIsLoading(false);
    }
  };

  // OBTENER INFORMACION DEL USUARIO ==============================================

  const { data, loading, error, refetch } = useQuery(ME);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const { me } = data || {};

  /* if (!me) {
    return <Text>No user data available.</Text>;
  } */

  const Chats = me.chats;
  const filteredChats = Chats.filter((chat: any) => chat.messages.length > 0);
  const orderedChats = filteredChats.sort(
    (a: any, b: any) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  return (
    <SafeAreaView style={styles(activeColors).safeArea}>
      <SidebarDrawer
        isVisible={isLeftDrawerVisible}
        toggleDrawer={toggleLeftDrawer}
        onChatSelect={handleChatSelection}
        onChatSelectId={handleSelectChat}
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
                color={activeColors.text}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
            <Image
              source={require("./../../assets/images/logo.png")}
              style={styles(activeColors).logoHeader}
            ></Image>

            <Text style={styles(activeColors).titleHeader}>Cuentame +</Text>
          </View>
          {selectedChatMessages.length > 0 ? (
            <TouchableOpacity onPress={toggleRightDrawer}>
              <MaterialCommunityIcons
                name="text-search"
                size={24}
                color={activeColors.text}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}

      <View style={styles(activeColors).container}>
        {width > 880 ? (
          <View style={styles(activeColors).sidebar}>
            {/* ====================== SIDEBAR TITLE =============================== */}
            <View style={styles(activeColors).sidebarHeader}>
              <Image
                source={require("./../../assets/images/logo.png")}
                style={styles(activeColors).logo}
              ></Image>
              <Pressable onPress={() => router.navigate("/")}>
                <Text style={styles(activeColors).titleHeader}>Cuentame +</Text>
              </Pressable>
            </View>
            <Divider bold />

            {/* =================== CREATE CHAT BUTTON ============================ */}
            <TouchableOpacity
              style={styles(activeColors).buttonCreate}
              onPress={function (): void {
                handleCreateChat();
              }}
              disabled={isLoadingCreateChat}
            >
              {isLoadingCreateChat ? (
                <ActivityIndicator animating={true} color={activeColors.text} />
              ) : (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color={activeColors.text}
                  ></MaterialCommunityIcons>
                  <Text style={styles(activeColors).textButton}>
                    {" "}
                    Crear Conversación
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <Divider bold />

            {/* ============= LISTA DE CONVERSACIONES ============================== */}
            <Text style={styles(activeColors).subtitle2}>
              Conversaciones anteriores
            </Text>

            <FlatList
              data={filteredChats}
              key={filteredChats._id}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    handleSelectChat(item._id);
                  }}
                >
                  <ChatItem chat={item} id={item._id}></ChatItem>
                </TouchableOpacity>
              )}
            />

            <Divider bold />
            <View style={styles(activeColors).sidebarFooter}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  minWidth: 240,
                }}
              >
                <Avatar.Text
                  label={data.me.name.charAt(0).toUpperCase()}
                  size={36}
                ></Avatar.Text>
                <Text style={styles(activeColors).body1}>{data.me.name}</Text>
              </View>

              <Pressable onPress={showModal}>
                <MaterialCommunityIcons
                  name="cog"
                  size={24}
                  color={activeColors.text}
                ></MaterialCommunityIcons>
              </Pressable>

              <ConfigModal
                isVisible={isModalVisible}
                onClose={hideModal}
                userInfo={data.me}
              ></ConfigModal>
            </View>
          </View>
        ) : null}

        {/* ===============================   CHATS ================================= */}
        <View style={styles(activeColors).cardContainer}>
          <View style={{ flexDirection: "row-reverse", flex: 1 }}>
            {width > 880 && selectedChatMessages.length > 0 ? (
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
                {selectedChatMessages.length > 0 ? (
                  selectedChatMessages.map((message) => {
                    if (message.role === "USER") {
                      return (
                        <UserMessage
                          key={message.id}
                          message={message.content}
                          label={data.me.name.charAt(0).toUpperCase()}
                        />
                      );
                    } else if (message.role === "IA") {
                      return <IaMessage key={message.id} message={message} />;
                    }
                    return null;
                  })
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
              style={{ flex: 1, height: 50, flexShrink: 0 }}
              mode="outlined"
              value={inputValue}
              disabled={isLoading}
              onChangeText={setInputValue}
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
                disabled={isLoading}
                onPress={() => {
                  handleCreateMessage();
                }}
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
      paddingTop: 25,
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
      width: 300,
      backgroundColor: activeColors.primaryDark,
      padding: 20,
      justifyContent: "center",
      alignItems: "flex-start",
      borderRadius: 8,
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
    cardText: {
      fontSize: 16,
    },
    sidebarHeader: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
    titleHeader: {
      fontFamily: "Poppins-Bold",
      color: Colors.light.onPrimary,
      fontSize: 28,
    },
    logo: {
      width: 70,
      height: 70,
    },
    logoHeader: {
      width: 50,
      height: 50,
    },
    buttonCreate: {
      padding: 10,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    textButton: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
    },
    subtitle2: {
      fontFamily: "Poppins-Bold",
      fontSize: 14,
      color: activeColors.text,
      paddingVertical: 10,
    },
    sidebarFooter: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    body1: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      color: activeColors.text,
    },
    sendButton: {
      height: 50,
      width: 50,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 10,
      borderColor: activeColors.secondaryDark,
      borderWidth: 2,
      padding: 10,
      marginLeft: 10,
    },
  });
