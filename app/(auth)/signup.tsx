import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from "react-native";
import { router } from "expo-router";
import { Card, TextInput } from "react-native-paper";
import BlackButton from "@/components/BlackButton";
import { Colors } from "@/constants/Colors";
import NavBar from "@/components/NavBar";

// apollo
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import PinkButton from "@/components/PinkButton";

const REGISTER_USER = gql`
  mutation registerUser($input: CreateUserInput!) {
    registerUser(input: $input) {
      _id
      name
      lastname
      email
      password
      createdAt
      updatedAt
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

export default function signupScreen() {
  const width = Dimensions.get("window").width;

  const [isLoading, setIsLoading] = useState(false);

  // state del formulario
  const [name, saveName] = useState("");
  const [lastname, saveLastName] = useState("");
  const [email, saveEmail] = useState("");
  const [password, savePassword] = useState("");

  const [message, saveMessage] = useState("");

  //mutation para crear nuevos usuarios
  const [registerUser] = useMutation(REGISTER_USER);

  // cuando el usuario presiona el boton de crear cuenta
  const handleSubmit = async () => {
    // validar el formulario
    if (name === "" || lastname === "" || email === "" || password === "") {
      // mostrar un error
      saveMessage("Todos los campos son obligatorios");
      return;
    } else {
      saveMessage("");
    }

    // password minimo de 6 caracteres
    if (password.length < 8) {
      saveMessage("La contraseña debe ser de al menos 8 caracteres");
      return;
    } else if (
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      saveMessage(
        "La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial"
      );
      return;
    } else {
      saveMessage("");
    }

    setIsLoading(true);

    // guardar el usuario en la base
    try {
      const { data } = await registerUser({
        variables: {
          input: {
            name,
            lastname,
            email,
            password,
          },
        },
      });
      if (data) {
        saveMessage("Usuario creado correctamente");
        router.replace("/login");
        setIsLoading(false);
      }
    } catch (error: any) {
      saveMessage(error.message);
      setIsLoading(false);
    }
  };

  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

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
          ? require("./../../assets/images/Group7dark.png")
          : require("./../../assets/images/Group7.png")
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
              Registro de usuario
            </Text>

            {/* ===================== NAME INPUT ==================== */}
            <TextInput
              onChangeText={(texto) => saveName(texto)}
              style={
                width > 500
                  ? styles(activeColors).inputWeb
                  : styles(activeColors).inputMovil
              }
              mode="outlined"
              label={"Nombre(s)"}
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
                <TextInput.Icon icon="account" color={activeColors.primary} />
              }
            ></TextInput>

            {/* =================== LAST NAME INPUT ===================== */}
            <TextInput
              onChangeText={(texto) => saveLastName(texto)}
              style={
                width > 500
                  ? styles(activeColors).inputWeb
                  : styles(activeColors).inputMovil
              }
              mode="outlined"
              label={"Apellido(s)"}
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
                <TextInput.Icon icon="account" color={activeColors.primary} />
              }
            ></TextInput>

            {/* =================== EMAIL INPUT ===================== */}
            <TextInput
              onChangeText={(texto) => saveEmail(texto)}
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

            {/* =================== PASSWORD INPUT ===================== */}
            <TextInput
              onChangeText={(texto) => savePassword(texto)}
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

            {/* ================================================== */}
            <Text
              style={
                width > 500
                  ? styles(activeColors).text
                  : styles(activeColors).textMovil
              }
            >
              ¿Ya tienes una cuenta?
              <TouchableOpacity onPress={() => router.navigate("/login")}>
                <Text
                  style={
                    width > 500
                      ? styles(activeColors).textLink
                      : styles(activeColors).textLinkMovil
                  }
                >
                  {" "}
                  Ingresa aquí
                </Text>
              </TouchableOpacity>
            </Text>
            <View style={styles(activeColors).button}>
              {isDarkMode ? (
                <PinkButton
                  title={"Registrarse"}
                  handlePress={() => handleSubmit()}
                  isLoading={isLoading}
                ></PinkButton>
              ) : (
                <BlackButton
                  title={"Registrarse"}
                  handlePress={() => handleSubmit()}
                  isLoading={isLoading}
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
      marginVertical: 10,
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
      marginHorizontal: 20,
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
