import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

const PreguntasPreguntadas = ({
  onPressPregunta,
}: {
  onPressPregunta: any;
}) => {
  const { width } = Dimensions.get("window");

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <View style={styles(activeColors).container}>
      <Image
        style={
          width > 880
            ? styles(activeColors).logo
            : styles(activeColors).logoMobile
        }
        source={require("./../assets/images/logovariant.png")}
      />
      <Text style={styles(activeColors).textTitle}>
        Preguntas + preguntadas :D
      </Text>
      <View style={styles(activeColors).questions}>
        <TouchableOpacity
          onPress={() => onPressPregunta("Como empezar a invertir?")}
        >
          <View style={styles(activeColors).cardQuestion}>
            <Text style={styles(activeColors).cardText}>
              Como empezar a invertir?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressPregunta("Que es la E-Firma?")}>
          <View style={styles(activeColors).cardQuestion}>
            <Text style={styles(activeColors).cardText}>
              Que es la E-Firma?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressPregunta("Como funciona el credito?")}
        >
          <View style={styles(activeColors).cardQuestion}>
            <Text style={styles(activeColors).cardText}>
              Como funciona el credito?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressPregunta("Que es el Afore?")}>
          <View style={styles(activeColors).cardQuestion}>
            <Text style={styles(activeColors).cardText}>Que es el Afore?</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    container: {
      verticalAlign: "bottom",
      flexGrow: 1,
      alignContent: "center",
      justifyContent: "center",
      margin: 10,
    },
    logo: {
      width: 100,
      height: 100,
      alignSelf: "center",
      margin: 10,
    },
    logoMobile: {
      width: 50,
      height: 50,
      alignSelf: "center",
      margin: 10,
    },
    textTitle: {
      textAlign: "center",
      alignSelf: "center",
      fontFamily: "Poppins-Bold",
      fontSize: 34,
      color: activeColors.secondaryDark,
    },
    questions: {
      marginTop: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 20,
    },
    cardQuestion: {
      borderColor: activeColors.secondaryDark,
      borderRadius: 10,
      borderWidth: 3,
      maxWidth: 300,
      paddingHorizontal: 30,
      paddingVertical: 15,
    },
    cardText: {
      color: activeColors.text,
      fontSize: 14,
      fontFamily: "Poppins-Regular",
    },
  });

export default PreguntasPreguntadas;
