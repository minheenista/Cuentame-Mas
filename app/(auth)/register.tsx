import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  Button,
  ImageBackground,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import NavBar from "@/components/NavBar";
import { Card, TextInput } from "react-native-paper";
import BlackButton from "@/components/BlackButton";
import { useState } from "react";

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const width = Dimensions.get("window").width;
  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };
  return (
    <ImageBackground
      style={styles.bg}
      source={require("./../../assets/images/Group7.png")}
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
              Registro de usuario
            </Text>

            {/* ===================== NAME INPUT ==================== */}
            <TextInput
              style={width > 500 ? styles.inputWeb : styles.inputMovil}
              mode="outlined"
              label={"Nombre(s)"}
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
                <TextInput.Icon icon="account" color={Colors.light.primary} />
              }
            ></TextInput>
            <TextInput
              style={width > 500 ? styles.inputWeb : styles.inputMovil}
              mode="outlined"
              label={"Apellido(s)"}
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
                <TextInput.Icon icon="account" color={Colors.light.primary} />
              }
            ></TextInput>
            <TextInput
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
            <TextInput
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

            {/* ================================================== */}
            <Text style={width > 500 ? styles.text : styles.textMovil}>
              ¿Ya tienes una cuenta?
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text
                  style={width > 500 ? styles.textLink : styles.textLinkMovil}
                >
                  {" "}
                  Ingresa aquí
                </Text>
              </TouchableOpacity>
            </Text>
            <View style={styles.button}>
              <BlackButton
                title={"Registrarse"}
                handlePress={() => navigation.navigate("login")}
                isLoading={false}
              ></BlackButton>
            </View>

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
    marginVertical: 10,
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
    marginBottom: 40,
  },
  textHint: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: Colors.light.textHint,
    marginBottom: 20,
  },
  textHintMovil: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 24,
    textAlign: "center",
    color: Colors.light.textHint,
    marginBottom: 20,
  },
});
