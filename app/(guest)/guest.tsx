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

import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavBar from "@/components/NavBar";
import { TextInput } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import MenuGuestDrawer from "@/components/MenuGuestDrawer";
import { useEffect, useState } from "react";
import React from "react";
import ReferencesDrawer from "@/components/ReferencesDrawer";
import PreguntasPreguntadas from "@/components/PreguntasPreguntadas";
import UserMessage from "@/components/UserMessage";
import IaMessage from "@/components/IaMessage";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

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
            {width > 880 ? (
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
              <ScrollView style={{ gap: 20 }}>
                {/* <UserMessage message="Que es el RFC?" />
                <IaMessage message="El RFC es una clave única de registro utilizada en México para identificar a las personas físicas y morales que realizan actividades económicas y deben contribuir con el gasto público ante el SAT (Servicio de Administración Tributaria). Esta clave se compone de 13 caracteres alfanuméricos, formados por las iniciales del nombre de la persona física o moral, seguido de la fecha de nacimiento o constitución y 3 caracteres más llamados homoclave que el SAT otorga para que el RFC sea una clave única e irrepetible entre todos los contribuyentes del país" />
                 */}
                <PreguntasPreguntadas
                  onPressPregunta={handlePregunta}
                ></PreguntasPreguntadas>
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
                  onPress={() => {
                    toggleSpeech();
                  }}
                />
              }
            ></TextInput>

            {/* =================== SEND BUTTON =================== */}
            <View style={styles(activeColors).sendButton}>
              <TouchableOpacity
                onPress={() => {
                  throw new Error("Envianding.");
                }}
              >
                <MaterialCommunityIcons
                  name="send"
                  color={activeColors.secondaryDark}
                  size={24}
                ></MaterialCommunityIcons>
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
