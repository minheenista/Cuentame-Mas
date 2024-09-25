import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import * as React from "react";
import NavBar from "@/components/NavBar";
import BlackButton from "@/components/BlackButton";
import OutlinedBlackButton from "@/components/OutlinedBlackButton";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CuentameMasScreen({ navigation }: { navigation: any }) {
  const { width } = Dimensions.get("window");
  const router = useRouter();

  return (
    <ScrollView>
      {/* ================ HEADER WEB ===================== */}

      {width > 880 && (
        <View>
          <NavBar navigation={navigation}></NavBar>
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
            handlePress={() => navigation.navigate("register")}
            isLoading={false}
          ></BlackButton>
          <OutlinedBlackButton
            title={"Ingresa como invitado"}
            handlePress={() => navigation.navigate("chatGuest")}
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
      <View style={styles.section}>
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

      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  content: {
    position: "relative",
    padding: 20,
    paddingBottom: 0,
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
  section: {},
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
  drawerContainer: {
    width: "80%",

    padding: 20,
    backgroundColor: "#F09D99",
  },
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  drawerLogo: {
    width: 50,
    height: 50,
  },
  drawerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  drawerItem: {
    marginVertical: 10,
    color: "#292929",
  },
  drawerButton: {
    backgroundColor: "#292929",
    borderRadius: 100,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  drawerButtonText: {
    color: "#fff",
  },
  bg: {
    height: 100,
    width: "115%",
    alignSelf: "center",
    resizeMode: "stretch",
  },

  circle: {
    position: "absolute",
    /*     borderRadius: 2422,
     */ width: "120%",
    flexShrink: 0,
    top: "0%", // Ajusta esta posición según sea necesario
    height: "96%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    backgroundColor: Colors.light.primary, // Color del círculo con transparencia
    alignSelf: "center",
  },
});
