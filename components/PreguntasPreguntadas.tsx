import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const PreguntasPreguntadas = () => {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Image
        style={width > 880 ? styles.logo : styles.logoMobile}
        source={require("./../assets/images/logovariant.png")}
      />
      <Text style={styles.textTitle}> Preguntas + preguntadas :D</Text>
      <View style={styles.questions}>
        <TouchableOpacity>
          <View style={styles.cardQuestion}>
            <Text style={styles.cardText}> Como empezar a invertir?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardQuestion}>
            <Text style={styles.cardText}> Que es la E-Firma?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardQuestion}>
            <Text style={styles.cardText}> Como funciona el credito?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardQuestion}>
            <Text style={styles.cardText}> Que es el Afore?</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: Colors.light.secondaryDark,
  },
  questions: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  cardQuestion: {
    borderColor: Colors.light.secondaryDark,
    borderRadius: 10,
    borderWidth: 3,
    maxWidth: 300,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  cardText: {
    color: Colors.light.text,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});

export default PreguntasPreguntadas;
