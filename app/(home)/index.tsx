import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { router, useRouter } from "expo-router";
import NavBar from "@/components/NavBar";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "react-native";
import BlackButton from "@/components/BlackButton";
import OutlinedBlackButton from "@/components/OutlinedBlackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { gql, useMutation } from "@apollo/client";

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

export default function HomeScreen() {
  const { width } = Dimensions.get("window");
  const router = useRouter();

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
    <ScrollView style={{ backgroundColor: activeColors.background }}>
      {/* ================ HEADER WEB ===================== */}

      {width > 880 && (
        <View>
          <NavBar></NavBar>
        </View>
      )}

      {/* ====================== CONTENT ================= */}
      <View style={styles(activeColors).content}>
        <View style={styles(activeColors).circle} />

        {/* ================== Intro ====================== */}
        <View style={styles(activeColors).intro}>
          <Text
            style={
              width > 1200
                ? styles(activeColors).introTextWeb
                : width < 600
                ? styles(activeColors).introTextSmall
                : styles(activeColors).introTextMedium
            }
          >
            Obtén respuestas inmediatas a tus dudas de educación financiera
          </Text>
          <Image
            source={require("./../../assets/images/logo.png")}
            style={
              width > 880
                ? styles(activeColors).largeImage
                : width < 600
                ? styles(activeColors).smallImage
                : styles(activeColors).mediumImage
            }
          />
        </View>
        <View
          style={
            width > 400
              ? styles(activeColors).buttonsWeb
              : styles(activeColors).buttonsMobile
          }
        >
          <BlackButton
            title={"Regístrate"}
            handlePress={() => router.navigate("/signup")}
            isLoading={false}
          ></BlackButton>
          <OutlinedBlackButton
            title={"Ingresa como invitado"}
            handlePress={() => handleGuest()}
            isLoading={false}
          ></OutlinedBlackButton>
        </View>
        <View>
          <Image
            style={styles(activeColors).bg}
            source={require("./../../assets/images/bg.png")}
          ></Image>
        </View>
      </View>

      {/* ===================== ABOUT ======================== */}
      <View>
        <Text
          style={
            width > 750
              ? styles(activeColors).sectionTitleWeb
              : styles(activeColors).sectionTitleMobile
          }
        >
          Qué es Cuéntame + ?
        </Text>

        <View
          style={
            width > 880 ? styles(activeColors).row : styles(activeColors).column
          }
        >
          <View
            style={
              width > 880
                ? styles(activeColors).sectionItemWeb
                : styles(activeColors).sectionItemMobile
            }
          >
            <MaterialCommunityIcons
              name="piggy-bank-outline"
              color={Colors.light.secondaryDark}
              size={100}
            ></MaterialCommunityIcons>
            <Text style={styles(activeColors).sectionText}>
              Cuéntame + es tu mejor compañero para resolver tus dudas de
              educación financiera y contabilidad. En un mundo donde las
              decisiones financieras son cada vez más complejas y determinantes
              para el bienestar económico, Cuéntame + ofrece una solución
              accesible y personalizada.
            </Text>
          </View>
          <View
            style={
              width > 880
                ? styles(activeColors).sectionItemWeb
                : styles(activeColors).sectionItemMobile
            }
          >
            <MaterialCommunityIcons
              name="bank-outline"
              color={Colors.light.secondaryDark}
              size={100}
            ></MaterialCommunityIcons>
            <Text style={styles(activeColors).sectionText}>
              Cuéntame + analiza y responde a consultas específicas,
              proporcionando explicaciones claras y concisas sobre temas como la
              planificación presupuestaria, la inversión, el ahorro, la gestión
              de deudas, impuestos y más.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles(activeColors).footer} />
    </ScrollView>
  );
}

const styles = (activeColors: any) =>
  StyleSheet.create({
    content: {
      position: "relative",
      padding: 20,
      paddingBottom: 0,
    },
    circle: {
      position: "absolute",
      width: "120%",
      flexShrink: 0,
      top: "0%", // Ajusta esta posición según sea necesario
      height: "96%",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      backgroundColor: activeColors.primary, // Color del círculo con transparencia
      alignSelf: "center",
    },
    intro: {
      paddingHorizontal: "3%",
      flexDirection: "row",
      display: "flex",
      position: "relative",
      justifyContent: "space-between",
      alignItems: "center",
    },
    introTextWeb: {
      color: Colors.dark.text,
      marginHorizontal: 20,
      fontSize: 72,
      fontFamily: "Poppins-Bold",
    },
    introTextMedium: {
      color: "#fff",
      fontSize: 48,
      fontFamily: "Poppins-Bold",
    },
    introTextSmall: {
      color: "#fff",
      maxWidth: "60%",
      fontSize: 22,
      flexWrap: "wrap",
      fontFamily: "Poppins-Bold",
    },
    largeImage: {
      width: 400,
      height: 400,
    },
    mediumImage: {
      width: 250,
      height: 250,
    },
    smallImage: {
      width: 150,
      height: 150,
    },
    buttonsWeb: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginVertical: 15,
      marginHorizontal: "5%",
    },
    buttonsMobile: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      gap: 20,
      marginVertical: 15,
    },
    bg: {
      height: 100,
      width: "115%",
      alignSelf: "center",
      resizeMode: "stretch",
    },
    sectionTitleWeb: {
      marginVertical: 20,
      marginStart: "3%",
      paddingLeft: 10,
      fontSize: 60,
      letterSpacing: -0.5,
      lineHeight: 72,
      fontFamily: "Poppins-Bold",
      color: activeColors.text,
      textAlign: "left",
    },
    sectionTitleMobile: {
      marginVertical: 20,
      marginStart: "3%",
      paddingLeft: 10,
      fontSize: 24,
      letterSpacing: 0.15,
      fontFamily: "Poppins-Bold",
      color: activeColors.text,
      textAlign: "left",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    column: {
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
    },
    sectionItemWeb: {
      alignItems: "center",
      width: "45%",
    },
    sectionItemMobile: {
      alignItems: "center",
      width: "90%",
    },
    sectionText: {
      fontFamily: "Poppins-Regular",
      textAlign: "center",
      fontSize: 16,
      color: activeColors.text,
    },
    footer: {
      marginTop: 20,
      height: 50,
      backgroundColor: activeColors.primary,
    },
  });
