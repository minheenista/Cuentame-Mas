import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Pressable,
  Dimensions,
  useColorScheme,
  ScrollView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import NavBar from "@/components/NavBar";

export default function PrivacyScreen() {
  const width = Dimensions.get("window").width;

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <ScrollView style={{ backgroundColor: activeColors.background }}>
      {width > 880 && (
        <View>
          <NavBar></NavBar>
        </View>
      )}
      <View style={styles(activeColors).container}>
        <Text
          style={
            width > 720
              ? styles(activeColors).titleWeb
              : styles(activeColors).titleMobile
          }
        >
          Políticas de Privacidad
        </Text>
        <Text style={[styles(activeColors).h6, { marginBottom: 20 }]}>
          Última actualización: 11 de febrero de 2024
        </Text>
        <Text style={styles(activeColors).text}>
          Este Aviso de Privacidad fue redactado conforme los principios de
          licitud, consentimiento, información, calidad, finalidad, lealtad,
          proporcionalidad y responsabilidad establecidos en la Ley Federal de
          Protección de Datos Personales en Posesión de Particulares (LFPDPPP)
          publicada en el Diario Oficial de la Federación el 05-07-2010 y las
          Leyes aplicables dentro de la jurisdicción correspondiente.
        </Text>
        <Text
          style={[
            styles(activeColors).h5,
            { alignSelf: "center", marginVertical: 20 },
          ]}
        >
          RESUMEN DE LA POLITICA DE PRIVACIDAD
        </Text>

        <Text style={[styles(activeColors).h5]}>
          Datos Personales tratados para las siguientes finalidades y utilizando
          los siguientes servicios:
        </Text>

        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          - Contactar con el Usuario
        </Text>

        <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          - Formulario de contacto
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          Datos Personales: nombre; apellido(s); dirección de correo
          electrónico.
        </Text>

        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          - Permisos sobre dispositivos para acceder a micrófono.
        </Text>

        {/*  <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          - Permisos sobre dispositivos para acceder a Datos Personales
        </Text> */}
        {/* <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          Datos Personales: Permiso de ubicación aproximada (en modo no
          continuo); Permiso para acceder a la ubicación exacta (en modo no
          continuo);
        </Text> */}
        {/* <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          Permiso para la cámara; Permiso para la Galería de Fotos
        </Text> */}

        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          - Registro y autenticación
        </Text>

        {/* <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          - Firebase Authentication
        </Text> */}

        <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          Datos Personales: nombre; apellido(s); username; cuentas en redes
          sociales; foto de perfil; dirección de correo electrónico.
        </Text>

        {/* <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          - Facebook Oauth
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          Datos Personales: distintas clases de Datos; Rastreador
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          - Twitter OAuth y Google OAuth
        </Text>

        <Text style={[styles(activeColors).text, { marginLeft: 30 }]}>
          Datos Personales: distintas clases de Datos, según se especifica en la
          Política de Privacidad del servicio
        </Text> */}
      </View>
    </ScrollView>
  );
}

const styles = (activeColors: any) =>
  StyleSheet.create({
    container: {
      margin: 20,
    },
    titleWeb: {
      fontSize: 60,
      fontFamily: "Poppins-Regular",
      color: activeColors.text,
      textAlign: "center",
      marginBottom: 20,
    },
    titleMobile: {
      marginTop: 20,
      fontSize: 24,
      fontFamily: "Poppins-Regular",
      color: activeColors.text,
      textAlign: "center",
      marginBottom: 20,
    },
    h6: {
      fontFamily: "Poppins-Bold",
      fontSize: 16,
      color: activeColors.text,
      letterSpacing: 0.15,
    },
    h5: {
      fontFamily: "Poppins-Bold",
      fontSize: 20,
      color: activeColors.text,
      letterSpacing: 0.15,
    },
    text: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: activeColors.text,
    },
  });
