import {
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import NavBar from "@/components/NavBar";
import { Card, TextInput } from "react-native-paper";
import BlackButton from "@/components/BlackButton";
import { useState } from "react";

// apollo
import { gql, useMutation } from "@apollo/client";

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

export default function RegisterScreen({ navigation }: { navigation: any }) {
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
      console.log("Todos los campos son obligatorios");
      return;
    } else {
      saveMessage("");
    }

    // password minimo de 6 caracteres
    if (password.length < 8) {
      saveMessage("La contraseña debe ser de al menos 8 caracteres");
      console.log("La contraseña debe ser de al menos 8 caracteres");
      return;
    } else {
      saveMessage("");
    }

    // email valido

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
      console.log(data);
      navigation.navigate("login");
    } catch (error: any) {
      console.log(error);
      saveMessage(error.message);
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
              onChangeText={(texto) => saveName(texto)}
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

            {/* =================== LAST NAME INPUT ===================== */}
            <TextInput
              onChangeText={(texto) => saveLastName(texto)}
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

            {/* =================== EMAIL INPUT ===================== */}
            <TextInput
              onChangeText={(texto) => saveEmail(texto)}
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

            {/* =================== PASSWORD INPUT ===================== */}
            <TextInput
              onChangeText={(texto) => savePassword(texto)}
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
                handlePress={() => handleSubmit()}
                isLoading={false}
              ></BlackButton>
            </View>

            <Text style={styles.errorText}>{message}</Text>

            <TouchableOpacity onPress={() => navigation.navigate("chatGuest")}>
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
