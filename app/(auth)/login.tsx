import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  Button,
  Dimensions,
  View,
  ScrollView,
  ImageBase,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import NavBar from "@/components/NavBar";
import { Card, TextInput } from "react-native-paper";
import BlackButton from "@/components/BlackButton";
import { Colors } from "@/constants/Colors";
import { button, input } from "@nextui-org/react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//apollo
import { gql, useMutation } from "@apollo/client";
import { router } from "expo-router";

const LOGIN = gql`
  mutation loginUser($input: loginInput!) {
    loginUser(input: $input) {
      accessToken
      tokenType
    }
  }
`;

export default function LoginScreen({ navigation }: { navigation: any }) {
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
      const { token } = data.loginUser;

      await AsyncStorage.setItem("token", token);

      console.log(data);
      setMessage("Usuario autenticado correctamente");
      //guardar token en localstorage
      //redirigir a chats
      //router.push("/(chats)");
      navigation.navigate("chatUser");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const width = Dimensions.get("window").width;
  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  return (
    <ImageBackground
      style={styles.bg}
      source={require("./../../assets/images/Group8.png")}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* ============== NAV BAR ================= */}

        {width > 880 && (
          <View>
            <NavBar navigation={navigation}></NavBar>
          </View>
        )}
        {/* ============== BACKGROUND =============== */}

        <View style={styles.centeredContainer}>
          <Card style={styles.card}>
            <Image
              source={require("./../../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text
              style={width > 500 ? styles.textTitleWeb : styles.textTitleMovil}
            >
              ¡Bienvenido de nuevo!
            </Text>

            {/* =================== INPUT EMAIL =================== */}
            <TextInput
              onChangeText={(texto) => setEmail(texto)}
              style={width > 500 ? styles.inputWeb : styles.inputMovil}
              mode="outlined"
              label={"Correo Electrónico"}
              outlineColor={Colors.light.primary}
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
              outlineStyle={{ borderRadius: 10, borderWidth: 2 }}
              underlineStyle={{ backgroundColor: "transparent" }}
              left={
                <TextInput.Icon icon="email" color={Colors.light.primary} />
              }
            ></TextInput>

            {/* =================== INPUT PASSWORD =================== */}
            <TextInput
              onChangeText={(texto) => setPassword(texto)}
              mode="outlined"
              label={"Contraseña"}
              style={width > 500 ? styles.inputWeb : styles.inputMovil}
              secureTextEntry={secureText}
              outlineColor={Colors.light.primary}
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
              right={
                <TextInput.Icon
                  icon={secureText ? "eye" : "eye-off"}
                  color={Colors.light.primary}
                  onPress={toggleSecureText}
                />
              }
              outlineStyle={{ borderRadius: 10, borderWidth: 2 }}
              underlineStyle={{ backgroundColor: "transparent" }}
              left={<TextInput.Icon icon="lock" color={Colors.light.primary} />}
            ></TextInput>

            {/* ================================================================= */}
            <Text style={width > 500 ? styles.text : styles.textMovil}>
              ¿No tienes una cuenta?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("register")}>
                <Text
                  style={width > 500 ? styles.textLink : styles.textLinkMovil}
                >
                  Regístrate aquí
                </Text>
              </TouchableOpacity>
            </Text>
            <View style={styles.button}>
              <BlackButton
                title={"INICIAR SESIÓN"}
                handlePress={() => handleSubmit()}
                isLoading={false}
              ></BlackButton>
            </View>
            <Text style={styles.errorText}>{message}</Text>

            <TouchableOpacity>
              <Text
                style={width > 500 ? styles.textHint : styles.textHintMovil}
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

const styles = StyleSheet.create({
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
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    color: Colors.light.primary,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  textTitleMovil: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    color: Colors.light.primary,
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
    color: Colors.light.text,
    marginBottom: 40,
  },
  textLink: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: Colors.light.primary,
  },
  textMovil: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textAlign: "center",
    color: Colors.light.text,
    marginBottom: 40,
  },
  textLinkMovil: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    textAlign: "center",
    color: Colors.light.primary,
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
    color: Colors.light.textHint,
    marginBottom: 20,
  },
  textHintMovil: {
    marginTop: 40,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 24,
    textAlign: "center",
    color: Colors.light.textHint,
    marginBottom: 20,
  },
  errorText: {
    marginTop: 10,
    marginHorizontal: 20,
    color: Colors.light.danger,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "center",
  },
});
