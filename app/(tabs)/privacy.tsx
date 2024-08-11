import {
  StyleSheet,
  Image,
  Platform,
  Button,
  Dimensions,
  ScrollView,
  Text,
  View,
} from "react-native";
import NavBar from "@/components/NavBar";

export default function PrivacyScreen({ navigation }: { navigation: any }) {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView>
      {width > 880 && (
        <View>
          <NavBar navigation={navigation}></NavBar>
        </View>
      )}
      <View style={styles.container}>
        <Text style={width > 720 ? styles.titleWeb : styles.titleMobile}>
          Políticas de Privacidad
        </Text>
        <Text style={[styles.h6, { marginBottom: 20 }]}>
          Última actualización: 11 de febrero de 2024
        </Text>
        <Text style={styles.text}>
          Este Aviso de Privacidad fue redactado conforme los principios de
          licitud, consentimiento, información, calidad, finalidad, lealtad,
          proporcionalidad y responsabilidad establecidos en la Ley Federal de
          Protección de Datos Personales en Posesión de Particulares (LFPDPPP)
          publicada en el Diario Oficial de la Federación el 05-07-2010 y las
          Leyes aplicables dentro de la jurisdicción correspondiente.
        </Text>
        <Text style={[styles.h5, { alignSelf: "center", marginVertical: 20 }]}>
          RESUMEN DE LA POLITICA DE PRIVACIDAD
        </Text>

        <Text style={[styles.h5]}>
          Datos Personales tratados para las siguientes finalidades y utilizando
          los siguientes servicios:
        </Text>

        <Text style={[styles.text, { marginLeft: 10 }]}>
          - Contactar con el Usuario
        </Text>

        <Text style={[styles.text, { marginLeft: 30 }]}>
          - Formulario de contacto
        </Text>
        <Text style={[styles.text, { marginLeft: 30 }]}>
          Datos Personales: nombre; apellido(s); dirección de correo
          electrónico.
        </Text>

        <Text style={[styles.text, { marginLeft: 10 }]}>
          - Permisos sobre dispositivos para acceder a Datos Personales
        </Text>

        <Text style={[styles.text, { marginLeft: 30 }]}>
          - Permisos sobre dispositivos para acceder a Datos Personales
        </Text>
        <Text style={[styles.text, { marginLeft: 30 }]}>
          Datos Personales: Permiso de ubicación aproximada (en modo no
          continuo); Permiso para acceder a la ubicación exacta (en modo no
          continuo);
        </Text>
        <Text style={[styles.text, { marginLeft: 30 }]}>
          Permiso para la cámara; Permiso para la Galería de Fotos
        </Text>

        <Text style={[styles.text, { marginLeft: 10 }]}>
          - Registro y autenticación
        </Text>

        <Text style={[styles.text, { marginLeft: 30 }]}>
          - Firebase Authentication
        </Text>

        <Text style={[styles.text, { marginLeft: 30 }]}>
          Datos Personales: nombre; apellido(s); username; cuentas en redes
          sociales; foto de perfil; dirección de correo electrónico.
        </Text>
        <Text style={[styles.text, { marginLeft: 30 }]}>- Facebook Oauth</Text>
        <Text style={[styles.text, { marginLeft: 30 }]}>
          Datos Personales: distintas clases de Datos; Rastreador
        </Text>
        <Text style={[styles.text, { marginLeft: 30 }]}>
          - Twitter OAuth y Google OAuth
        </Text>

        <Text style={[styles.text, { marginLeft: 30 }]}>
          Datos Personales: distintas clases de Datos, según se especifica en la
          Política de Privacidad del servicio
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  titleWeb: {
    fontSize: 60,
    fontFamily: "Poppins-Regular",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  titleMobile: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: "Poppins-Regular",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  h6: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    letterSpacing: 0.15,
  },
  h5: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    letterSpacing: 0.15,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 24,
  },
});
