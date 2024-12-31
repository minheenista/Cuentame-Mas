import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { router } from "expo-router";
import NavBar from "@/components/NavBar";
import { Card, TextInput } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import BlackButton from "@/components/BlackButton";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PinkButton from "@/components/PinkButton";

const LOGIN = gql`
  mutation loginUser($input: loginInput!) {
    loginUser(input: $input) {
      accessToken
      tokenType
    }
  }
`;

const CREATE_GUEST_SESSION = gql`
  mutation CreateGuestSession {
    createGuestSession {
      _id
      sessionId
      createdAt
      chatId {
        _id
        userId
        sessionId
        iamodelId
        title
        createdAt
        updatedAt
      }
      status
    }
  }
`;

export default function loginScreen() {
  const width = Dimensions.get("window").width;

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  // state del form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  // mutacion para login
  const [loginUser] = useMutation(LOGIN);

  const handleSubmit = async () => {
    //validar formulario
    if (email === "" || password === "") {
      setMessage("Todos los campos son obligatorios");
      return;
    } else {
      setMessage("");
    }

    //autenticar usuario
    try {
      const { data } = await loginUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
      const { accessToken, tokenType } = data.loginUser;

      //guardar token en localstorage
      if (accessToken) {
        await AsyncStorage.setItem("token", `${accessToken}`);
      } else {
        console.warn("No se obtuvo un token");
      }
      setMessage("Usuario autenticado correctamente");
      router.navigate("/(user)/");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  const [createGuestSession] = useMutation(CREATE_GUEST_SESSION);

  // Crear sesion de invitado
  const handleGuest = async () => {
    try {
      const { data } = await createGuestSession();
      const sessionId = data.createGuestSession.sessionId;
      const chatId = data.createGuestSession.chatId._id;

      // Navega a GuestScreen con el sessionId en la URL
      router.push(`/guest?session=${sessionId}&chat=${chatId}`);
    } catch (error) {
      console.error("Error al crear sesión de invitado:", error);
    }
  };

  return (
    <ImageBackground
      style={styles(activeColors).bg}
      source={
        isDarkMode
          ? require("./../../assets/images/Group8dark.png")
          : require("./../../assets/images/Group8.png")
      }
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* ============== NAV BAR ================= */}

        {width > 880 && (
          <View>
            <NavBar></NavBar>
          </View>
        )}
        {/* ============== BACKGROUND =============== */}

        <View style={styles(activeColors).centeredContainer}>
          <Card style={styles(activeColors).card}>
            <Image
              source={require("./../../assets/images/logo.png")}
              style={styles(activeColors).logo}
            />
            <Text
              style={
                width > 500
                  ? styles(activeColors).textTitleWeb
                  : styles(activeColors).textTitleMovil
              }
            >
              ¡Bienvenido de nuevo!
            </Text>

            {/* =================== INPUT EMAIL =================== */}
            <TextInput
              onChangeText={(texto) => setEmail(texto)}
              style={
                width > 500
                  ? styles(activeColors).inputWeb
                  : styles(activeColors).inputMovil
              }
              mode="outlined"
              label={"Correo Electrónico"}
              outlineColor={activeColors.primary}
              theme={{
                colors: {
                  primary: activeColors.primary,
                  text: activeColors.text,
                  placeholder: activeColors.text,
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
                <TextInput.Icon icon="email" color={activeColors.primary} />
              }
            ></TextInput>

            {/* =================== INPUT PASSWORD =================== */}
            <TextInput
              onChangeText={(texto) => setPassword(texto)}
              mode="outlined"
              label={"Contraseña"}
              style={
                width > 500
                  ? styles(activeColors).inputWeb
                  : styles(activeColors).inputMovil
              }
              secureTextEntry={secureText}
              outlineColor={activeColors.primary}
              theme={{
                colors: {
                  primary: activeColors.primary,
                  text: activeColors.text,
                  placeholder: activeColors.text,
                  background: activeColors.background,
                  onSurface: activeColors.text,
                  //TODO: CHANGE LABEL COLOR ACTIVE
                },
                fonts: {
                  regular: { fontFamily: "Poppins-Regular" },
                },
              }}
              right={
                <TextInput.Icon
                  icon={secureText ? "eye" : "eye-off"}
                  color={activeColors.primary}
                  onPress={toggleSecureText}
                />
              }
              outlineStyle={{ borderRadius: 10, borderWidth: 2 }}
              underlineStyle={{ backgroundColor: "transparent" }}
              left={<TextInput.Icon icon="lock" color={activeColors.primary} />}
            ></TextInput>

            {/* ================================================================= */}
            <Text
              style={
                width > 500
                  ? styles(activeColors).text
                  : styles(activeColors).textMovil
              }
            >
              ¿No tienes una cuenta?{" "}
              <TouchableOpacity
                onPress={() => router.navigate("/(auth)/signup")}
              >
                <Text
                  style={
                    width > 500
                      ? styles(activeColors).textLink
                      : styles(activeColors).textLinkMovil
                  }
                >
                  Regístrate aquí
                </Text>
              </TouchableOpacity>
            </Text>
            <View style={styles(activeColors).button}>
              {isDarkMode ? (
                <PinkButton
                  title={"INICIAR SESIÓN"}
                  handlePress={() => handleSubmit()}
                  isLoading={false}
                ></PinkButton>
              ) : (
                <BlackButton
                  title={"INICIAR SESIÓN"}
                  handlePress={() => handleSubmit()}
                  isLoading={false}
                ></BlackButton>
              )}
            </View>
            <Text style={styles(activeColors).errorText}>{message}</Text>

            <TouchableOpacity onPress={() => handleGuest()}>
              <Text
                style={
                  width > 500
                    ? styles(activeColors).textHint
                    : styles(activeColors).textHintMovil
                }
              >
                O ingresa en modo invitado.
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = (activeColors: any) =>
  StyleSheet.create({
    bg: {
      width: "auto",
      flex: 1,
    },
    centeredContainer: {
      flex: 1, // Ocupa todo el espacio disponible
      justifyContent: "center", // Centra verticalmente
      alignItems: "center", // Centra horizontalmente
      paddingHorizontal: 20,
    },
    card: {
      backgroundColor: activeColors.background,
      alignSelf: "center",
      marginVertical: 20,
      alignItems: "center",
      maxWidth: 500,
      alignContent: "center",
    },
    logo: {
      marginTop: 10,
      marginBottom: 10,
      width: 100,
      height: 100,
      alignSelf: "center",
    },
    textTitleWeb: {
      fontSize: 32,
      textAlign: "center",
      fontFamily: "Poppins-Bold",
      color: activeColors.primary,
      marginHorizontal: 30,
      marginBottom: 20,
    },
    textTitleMovil: {
      fontSize: 20,
      textAlign: "center",
      fontFamily: "Poppins-Bold",
      color: activeColors.primary,
      marginHorizontal: 30,
      marginBottom: 20,
    },
    inputWeb: {
      marginBottom: 20,
      height: 50,
      width: "70%",
      alignSelf: "center",
    },
    inputMovil: {
      marginBottom: 20,
      alignSelf: "center",
      minWidth: "75%",
      height: 50,
      width: "90%",
    },
    text: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      lineHeight: 24,
      textAlign: "center",
      color: activeColors.text,
      marginBottom: 40,
    },
    textLink: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      lineHeight: 24,
      textAlign: "center",
      color: activeColors.primary,
    },
    textMovil: {
      fontFamily: "Poppins-Regular",
      fontSize: 12,
      textAlign: "center",
      color: activeColors.text,
      marginBottom: 40,
    },
    textLinkMovil: {
      fontFamily: "Poppins-Regular",
      fontSize: 12,
      textAlign: "center",
      color: activeColors.primary,
    },
    button: {
      alignSelf: "center",
    },
    textHint: {
      marginTop: 40,
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      lineHeight: 24,
      textAlign: "center",
      color: activeColors.textHint,
      marginBottom: 20,
    },
    textHintMovil: {
      marginTop: 40,
      fontFamily: "Poppins-Regular",
      fontSize: 14,
      lineHeight: 24,
      textAlign: "center",
      color: activeColors.textHint,
      marginBottom: 20,
    },
    errorText: {
      marginTop: 10,
      marginHorizontal: 20,
      color: activeColors.danger,
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      textAlign: "center",
    },
  });
