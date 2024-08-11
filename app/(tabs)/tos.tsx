import { StyleSheet, Text, ScrollView, Dimensions, View } from "react-native";
import NavBar from "@/components/NavBar";

export default function TermsOfServiceScreen({
  navigation,
}: {
  navigation: any;
}) {
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
          Términos y Condiciones de Servicio
        </Text>
        <Text style={styles.h6}>
          Última actualización: 11 de febrero de 2024
        </Text>
        <Text style={[styles.h5, { alignSelf: "center", marginVertical: 20 }]}>
          ¡Te damos la bienvenida a Cuéntame +!
        </Text>
        <Text style={styles.text}>Las presentes Condiciones regulan:</Text>
        <Text style={[styles.text, { marginLeft: 10 }]}>
          - El uso de esta Aplicación,{" "}
        </Text>
        <Text style={[styles.text, { marginLeft: 10, marginBottom: 20 }]}>
          - y Cualquier otro Contrato o relación jurídica conexos celebrados con
          el Titular de forma jurídicamente vinculante. Las palabras en
          mayúsculas se definen en la sección correspondiente específica del
          presente documento.
        </Text>
        <Text style={styles.text}>
          Los Usuarios deben leer atentamente el presente documento.
        </Text>
        <Text style={[styles.text, { marginBottom: 20 }]}>
          Ninguna de las disposiciones de las presentes Condiciones crea una
          relación laboral, de agencia o de asociación entre las partes
          involucradas. Esta Aplicación es ofrecida por: MICHISOFT S DE RL DE CV
          UBICADA EN CALLE CIRCUITO DEL GATO 202, CIUDAD ADMINISTRATIVA, 98160
          ZACATECAS, ZAC. Correo electrónico de contacto del Titular:
          contacto.michisoft@gmail.com
        </Text>
        <Text style={[styles.h5, { marginBottom: 20 }]}>
          Información sobre esta Aplicación
        </Text>
        <Text style={styles.text}>
          Cuéntame+ es tu mejor compañero para resolver tus dudas de educación
          financiera y contabilidad. En un mundo donde las decisiones
          financieras son cada vez más complejas y determinantes para el
          bienestar económico, Cuéntame+ ofrece una solución accesible y
          personalizada.
        </Text>
        <Text style={styles.text}>«Esta Aplicación» hace referencia a:</Text>
        <Text style={[styles.text, { marginLeft: 10 }]}>
          - Esta página web, incluyendo sus subdominios y cualquier otra página
          web mediante la cual el Titular facilite su Servicio;
        </Text>
        <Text style={[styles.text, { marginLeft: 10 }]}>
          - Aplicaciones para móviles, tabletas y otros sistemas de dispositivos
          inteligentes;
        </Text>
        <Text style={[styles.text, { marginLeft: 10, marginBottom: 20 }]}>
          - El Servicio;
        </Text>
        <Text style={[styles.h5, { marginBottom: 20 }]}>
          Lo que el usuario debería saber de un vistazo
        </Text>
        <Text style={[styles.text, { marginLeft: 10 }]}>
          - La utilización de esta Aplicación y del Servicio está restringida en
          función de la edad: para acceder a esta Aplicación y a sus Servicios y
          utilizarlos es preciso ser mayor de edad según la ley aplicable.
        </Text>
        <Text style={[styles.text, { marginLeft: 10, marginBottom: 20 }]}>
          - El Servicio/esta Aplicación solo está destinado a los Consumidores.
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
