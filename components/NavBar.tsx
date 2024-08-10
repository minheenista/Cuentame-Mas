import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import BlackButton from "./BlackButton";
import { useFonts } from "@/hooks/useFonts";

const NavBar = ({ navigation }: { navigation: any }) => {
  const { width } = Dimensions.get("window");

  const fontsLoaded = useFonts();
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.header}>
      <View style={styles.headerLinks}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Cuéntame +</Text>
        {width > 1090 && (
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate("faq")}>
              <Text style={styles.menuItem}>Preguntas Frecuentes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("tos")}>
              <Text style={styles.menuItem}>Términos y Condiciones</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("privacy")}>
              <Text style={styles.menuItem}>Políticas de Privacidad</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {width > 1090 && (
        <BlackButton
          title={"Iniciar Sesión"}
          handlePress={() => navigation.navigate("login")}
          isLoading={false}
        ></BlackButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F09D99",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    margin: 10,
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItem: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#292929",
  },
});

export default NavBar;
