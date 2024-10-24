import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import NavBar from "@/components/NavBar";
import React from "react";
import SearchInput from "@/components/SearchInput";
import QuestionCard from "@/components/QuestionCard";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export default function FaqScreen() {
  const { width } = Dimensions.get("window");

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <ScrollView style={{ backgroundColor: activeColors.background }}>
      <SafeAreaView>
        {/* ================ HEADER WEB ===================== */}
        {width > 880 && (
          <View>
            <NavBar></NavBar>
          </View>
        )}

        {/* ====================== CONTENT ================= */}

        <View style={styles(activeColors).container}>
          <Text
            style={
              width > 720
                ? styles(activeColors).titleWeb
                : styles(activeColors).titleMobile
            }
          >
            Preguntas Frecuentes
          </Text>
          <SearchInput></SearchInput>
          <View style={styles(activeColors).questions}>
            <QuestionCard
              question={"¿Qué preguntas puedo hacer?"}
              answer={
                "Puedes hacer preguntas sobre educación financiera, como por ejemplo: ¿Qué es una tarjeta de crédito?, ¿Cómo puedo ahorrar dinero?, ¿Qué es un presupuesto?, entre otras."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Qué son los chats?"}
              answer={
                "Los chats son cada una de las conversaciones que tienes con la inteligencia artificial sobre tus preguntas de educación financiera. A través de estos chats, puedes hacer preguntas específicas y recibir respuestas personalizadas y detalladas en tiempo real."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Qué es el modo invitado?"}
              answer={
                "El modo invitado es una forma de usar la aplicación sin tener que crear una cuenta. Puedes hacer preguntas y recibir respuestas de la inteligencia artificial sin necesidad de registrarte."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Qué son los recordatorios?"}
              answer={
                "Los recordatorios son notificaciones que puedes configurar para que la aplicación te recuerde hacer una acción específica, como revisar tu presupuesto, ahorrar dinero o pagar tus deudas. Esta función es solo para usuarios registrados."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Para qué sirve registrar mi perfil?"}
              answer={
                "Registrar tu perfil te permite acceder a funciones adicionales de la aplicación, como creación de recordatorios y activar notificaciones, además puedes tener un historial de chats de preguntas que hayas realizado anteriormente."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Por qué debo registrar mi situación fiscal?"}
              answer={
                "Registrar tu situacion fiscal es opcional, pero es de ayuda para que la inteligencia artificial pueda darte respuestas más personalizadas y detalladas sobre tus preguntas de educación financiera. Esta función es solo para usuarios registrados."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Es seguro usar Cuéntame +?"}
              answer={
                "Sí, es seguro. La aplicación no almacena información sensible de los usuarios y cumple con las leyes de protección de datos. Además, la inteligencia artificial no tiene acceso a información personal de los usuarios."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Cuentame + puede darme consejos personalizados?"}
              answer={
                "Sí, la inteligencia artificial de Cuéntame + puede darte consejos personalizados sobre educación financiera, como por ejemplo: cómo ahorrar dinero, cómo pagar deudas, cómo invertir, entre otros. Estos consejos se basan en la información que proporcionas al registrar tu situación fiscal."
              }
            ></QuestionCard>

            <QuestionCard
              question={"¿Cuéntame + es gratis?"}
              answer={
                "Sí, Cuéntame + es una aplicación gratuita que puedes descargar y usar sin costo alguno. No hay cargos ocultos ni compras dentro de la aplicación."
              }
            ></QuestionCard>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = (activeColors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 20,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      color: activeColors.background,
    },
    titleWeb: {
      fontSize: 60,
      fontFamily: "Poppins-Regular",
      color: activeColors.text,
      textAlign: "center",
    },
    titleMobile: {
      marginTop: 20,
      fontSize: 24,
      fontFamily: "Poppins-Regular",
      color: activeColors.text,
      textAlign: "center",
    },
    questions: {
      paddingHorizontal: 30,
      flexDirection: "row", // Hace que las tarjetas estén en fila
      flexWrap: "wrap", // Permite que las tarjetas se envuelvan a la siguiente línea si no hay suficiente espacio
      justifyContent: "space-around", // Distribuye las tarjetas de manera uniforme
      gap: 20,
      marginTop: 20,
    },
  });
