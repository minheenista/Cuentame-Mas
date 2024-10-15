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
import { useColorScheme } from "@/hooks/useColorScheme.web";
import BlackButton from "@/components/BlackButton";
import OutlinedBlackButton from "@/components/OutlinedBlackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const { width } = Dimensions.get("window");
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <ScrollView>
      {/* ================ HEADER WEB ===================== */}

      {width > 880 && (
        <View>
          <NavBar></NavBar>
        </View>
      )}

      {/* ====================== CONTENT ================= */}
      <View style={styles.content}>
        <View style={styles.circle} />

        {/* ================== Intro ====================== */}
        <View style={styles.intro}>
          <Text
            style={
              width > 1200
                ? styles.introTextWeb
                : width < 600
                ? styles.introTextSmall
                : styles.introTextMedium
            }
          >
            Obtén respuestas inmediatas a tus dudas de de educación financiera
          </Text>
          <Image
            source={require("./../../assets/images/logo.png")}
            style={
              width > 880
                ? styles.largeImage
                : width < 600
                ? styles.smallImage
                : styles.mediumImage
            }
          />
        </View>
        <View style={width > 400 ? styles.buttonsWeb : styles.buttonsMobile}>
          <BlackButton
            title={"Regístrate"}
            handlePress={() => router.navigate("/signup")}
            isLoading={false}
          ></BlackButton>
          <OutlinedBlackButton
            title={"Ingresa como invitado"}
            handlePress={() => router.navigate("/guest")}
            isLoading={false}
          ></OutlinedBlackButton>
        </View>
        <View>
          <Image
            style={styles.bg}
            source={require("./../../assets/images/bg.png")}
          ></Image>
        </View>
      </View>

      {/* ===================== ABOUT ======================== */}
      <View>
        <Text
          style={
            width > 750 ? styles.sectionTitleWeb : styles.sectionTitleMobile
          }
        >
          Qué es Cuéntame + ?
        </Text>

        <View style={width > 880 ? styles.row : styles.column}>
          <View
            style={
              width > 880 ? styles.sectionItemWeb : styles.sectionItemMobile
            }
          >
            <MaterialCommunityIcons
              name="piggy-bank-outline"
              color={Colors.light.secondaryDark}
              size={100}
            ></MaterialCommunityIcons>
            <Text style={styles.sectionText}>
              Cuéntame + es tu mejor compañero para resolver tus dudas de
              educación financiera y contabilidad. En un mundo donde las
              decisiones financieras son cada vez más complejas y determinantes
              para el bienestar económico, Cuéntame + ofrece una solución
              accesible y personalizada.
            </Text>
          </View>
          <View
            style={
              width > 880 ? styles.sectionItemWeb : styles.sectionItemMobile
            }
          >
            <MaterialCommunityIcons
              name="bank-outline"
              color={Colors.light.secondaryDark}
              size={100}
            ></MaterialCommunityIcons>
            <Text style={styles.sectionText}>
              Cuéntame + analiza y responde a consultas específicas,
              proporcionando explicaciones claras y concisas sobre temas como la
              planificación presupuestaria, la inversión, el ahorro, la gestión
              de deudas, impuestos y más.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer} />

      {/* <Text>CEUNTAME MAS SCREEN</Text>
      <Pressable onPress={() => router.navigate("/")}>
        <Text>HOME</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("/faq")}>
        <Text>FAQ</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("/tos")}>
        <Text>TOS</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("/privacy")}>
        <Text>PRIVACY</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("/signup")}>
        <Text>REGISTRO</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("/login")}>
        <Text>LOGIN</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("/guest")}>
        <Text>INVITADO</Text>
      </Pressable> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: Colors.light.primary, // Color del círculo con transparencia
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
    color: "#fff",
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
    color: "#292929",
    textAlign: "left",
  },
  sectionTitleMobile: {
    marginVertical: 20,
    marginStart: "3%",
    paddingLeft: 10,
    fontSize: 24,
    letterSpacing: 0.15,
    fontFamily: "Poppins-Bold",
    color: "#292929",
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
  },
  footer: {
    marginTop: 20,
    height: 50,
    backgroundColor: "#F09D99",
  },
});
