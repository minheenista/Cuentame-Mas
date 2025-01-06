import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
  ScrollView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import NavBar from "@/components/NavBar";

export default function TosScreen() {
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
          Términos y Condiciones de Servicio
        </Text>
        <Text style={styles(activeColors).h6}>
          Última actualización: 11 de febrero de 2024
        </Text>
        <Text
          style={[
            styles(activeColors).h5,
            { alignSelf: "center", marginVertical: 20 },
          ]}
        >
          ¡Te damos la bienvenida a Cuéntame +!
        </Text>
        <Text style={styles(activeColors).text}>
          Las presentes Condiciones regulan:
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          - El uso de esta Aplicación,{" "}
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          - y Cualquier otro Contrato o relación jurídica conexos celebrados con
          el Titular de forma jurídicamente vinculante. Las palabras en
          mayúsculas se definen en la sección correspondiente específica del
          presente documento.
        </Text>
        <Text style={styles(activeColors).text}>
          Los Usuarios deben leer atentamente el presente documento.
        </Text>
        <Text style={[styles(activeColors).text, { marginBottom: 20 }]}>
          Ninguna de las disposiciones de las presentes Condiciones crea una
          relación laboral, de agencia o de asociación entre las partes
          involucradas. Esta Aplicación es ofrecida por: MICHISOFT S DE RL DE CV
          UBICADA EN CALLE CIRCUITO DEL GATO 202, CIUDAD ADMINISTRATIVA, 98160
          ZACATECAS, ZAC. Correo electrónico de contacto del Titular:
          cuentamemasmas@gmail.com
        </Text>
        <Text style={[styles(activeColors).h5, { marginBottom: 20 }]}>
          Información sobre esta Aplicación
        </Text>
        <Text style={styles(activeColors).text}>
          Cuéntame+ es tu mejor compañero para resolver tus dudas de educación
          financiera y contabilidad. En un mundo donde las decisiones
          financieras son cada vez más complejas y determinantes para el
          bienestar económico, Cuéntame+ ofrece una solución accesible y
          personalizada.
        </Text>
        <Text style={styles(activeColors).text}>
          «Esta Aplicación» hace referencia a:
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          - Esta página web, incluyendo sus subdominios y cualquier otra página
          web mediante la cual el Titular facilite su Servicio;
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          - Aplicaciones para móviles, tabletas y otros sistemas de dispositivos
          inteligentes;
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          - El Servicio;
        </Text>
        <Text style={[styles(activeColors).h5]}>
          Lo que el usuario debería saber de un vistazo
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          - La utilización de esta Aplicación y del Servicio está restringida en
          función de la edad: para acceder a esta Aplicación y a sus Servicios y
          utilizarlos es preciso ser mayor de edad según la ley aplicable.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          - El Servicio/esta Aplicación solo está destinado a los Consumidores.
        </Text>
        <Text
          style={[styles(activeColors).titleMobile, { marginVertical: 20 }]}
        >
          CONDICIONES DE USO
        </Text>
        <Text style={[styles(activeColors).h5]}>
          1. Aceptación de las Condiciones
        </Text>
        <Text style={[styles(activeColors).text, { marginBottom: 20 }]}>
          Al acceder o utilizar Cuéntame+ (en adelante, “la Aplicación”), los
          Usuarios aceptan quedar vinculados por los términos y condiciones aquí
          descritos. Si no está de acuerdo con estas Condiciones, debe
          abstenerse de utilizar la Aplicación.
        </Text>
        <Text style={[styles(activeColors).h5]}>2. Partes Involucradas</Text>
        <Text style={[styles(activeColors).text]}>
          Estas Condiciones constituyen un acuerdo entre:
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          • El Titular: MICHISOFT S DE RL DE CV, ubicada en CALLE CIRCUITO DEL
          GATO 202, CIUDAD ADMINISTRATIVA, 98160 ZACATECAS, ZAC.
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          • Correo electrónico de contacto: contacto.michisoft@gmail.com
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • El Usuario: Persona física que accede a la Aplicación para consumir
          los servicios ofrecidos.
        </Text>
        <Text style={[styles(activeColors).h5]}>3. Definiciones</Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          • Usuario: Toda persona que accede o utiliza la Aplicación y sus
          Servicios.
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          • Servicios: Los productos y servicios ofrecidos a través de
          Cuéntame+, incluyendo, pero no limitándose a, consultas de educación
          financiera y contabilidad.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Aplicación: Incluye el sitio web principal, sus subdominios,
          aplicaciones móviles y cualquier otro medio digital relacionado con el
          Servicio.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          4. Descripción de la Aplicación
        </Text>
        <Text style={[styles(activeColors).text]}>
          Cuéntame+ es una plataforma digital diseñada para ofrecer soluciones
          accesibles y personalizadas en temas de educación financiera y
          contabilidad. La Aplicación se presenta como un recurso práctico para
          apoyar la toma de decisiones económicas del Usuario, orientando hacia
          el bienestar financiero.
        </Text>
        <Text style={[styles(activeColors).text]}>La Aplicación incluye:</Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          • Sitios web y subdominios relacionados.
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          • Aplicaciones móviles, tabletas y dispositivos inteligentes.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Cualquier contenido, servicio o funcionalidad adicional que sea
          parte del ecosistema Cuéntame+.
        </Text>
        <Text style={[styles(activeColors).h5]}>5. Restricciones de Uso</Text>
        <Text style={[styles(activeColors).text]}>
          El acceso a la Aplicación está sujeto a las siguientes restricciones:
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          1. Edad mínima: El Usuario debe ser mayor de edad según la legislación
          aplicable en su lugar de residencia.
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          2. Uso exclusivo: La Aplicación está destinada únicamente a
          Consumidores y no debe usarse para fines comerciales sin autorización
          previa.
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 10 }]}>
          3. Actividades prohibidas:
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 20 }]}>
          • Uso con fines ilegales o fraudulentos.
        </Text>
        <Text style={[styles(activeColors).text, { marginLeft: 20 }]}>
          • Intentar acceder, modificar o descompilar el código fuente de la
          Aplicación.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 20, marginBottom: 20 },
          ]}
        >
          • Uso de bots o herramientas automatizadas para interactuar con la
          Aplicación.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          6. Acceso y Uso del Servicio
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Requisitos técnicos: El Usuario debe contar con dispositivos
          compatibles y acceso a internet para utilizar la Aplicación.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Actualizaciones: El Titular podrá realizar actualizaciones o
          mantenimiento que afecten temporalmente el acceso al Servicio.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Interrupciones: No se garantiza la disponibilidad ininterrumpida de
          la Aplicación y el Servicio.
        </Text>
        <Text style={[styles(activeColors).h5]}>7. Política de Privacidad</Text>
        <Text style={[styles(activeColors).text]}>
          La recopilación y tratamiento de los datos personales del Usuario se
          regirá por nuestra Política de Privacidad, que se considera parte
          integrante de estos Términos y Condiciones. Al utilizar la Aplicación,
          el Usuario consiente expresamente el uso de sus datos en los términos
          establecidos.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          8. Limitación de Responsabilidad
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • La Aplicación se proporciona “tal cual” y “según disponibilidad”.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • El Titular no garantiza la exactitud, integridad o actualidad de los
          contenidos ofrecidos.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • No se asume responsabilidad por:
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Daños indirectos, consecuentes o incidentales derivados del uso de
          la Aplicación.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Decisiones financieras tomadas por el Usuario basadas en la
          información ofrecida por el Servicio.
        </Text>
        <Text style={[styles(activeColors).h5]}>9. Propiedad Intelectual</Text>
        <Text style={[styles(activeColors).text]}>
          Todos los derechos de propiedad intelectual relacionados con la
          Aplicación y sus contenidos son propiedad del Titular o de terceros
          licenciantes. Está prohibido:
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Reproducir, distribuir, modificar o utilizar los contenidos sin
          autorización expresa.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Utilizar marcas, logotipos o elementos distintivos de la Aplicación
          sin permiso.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          10. Suspensión y Terminación de Acceso
        </Text>
        <Text style={[styles(activeColors).text]}>
          El Titular puede suspender o finalizar el acceso a la Aplicación en
          cualquier momento y sin previo aviso si:
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • El Usuario incumple estas Condiciones.
        </Text>
        <Text
          style={[
            styles(activeColors).text,
            { marginLeft: 10, marginBottom: 20 },
          ]}
        >
          • Se detecta un uso indebido del Servicio.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          11. Modificaciones a las Condiciones
        </Text>
        <Text style={[styles(activeColors).text]}>
          El Titular se reserva el derecho de modificar estas Condiciones en
          cualquier momento. Las actualizaciones serán publicadas en la
          Aplicación y entrarán en vigor inmediatamente. El uso continuo de la
          Aplicación después de la publicación implica la aceptación de los
          cambios.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          12. Resolución de Conflictos
        </Text>
        <Text style={[styles(activeColors).text]}>
          Resolución amistosa de conflictos
        </Text>
        <Text style={[styles(activeColors).text]}>
          Los Usuarios podrán plantear cualquier conflicto al Titular, que
          tratará de resolverlo de forma amistosa. Aunque el derecho de los
          Usuarios a emprender acciones legales no se verá afectado en ningún
          momento, en caso de producirse una controversia relativa a la
          utilización de esta Aplicación o del Servicio, se ruega a los Usuarios
          que contacten con el Titular mediante los datos de contacto indicados
          en el presente documento.
        </Text>
        <Text style={[styles(activeColors).text]}>
          El Usuario podrá formular su queja incluyendo una breve descripción
          enviándola a la dirección de correo electrónico del Titular
          especificada en el presente documento. El Titular tramitará la queja
          sin demoras indebidas y en el plazo de 10 días desde su recepción.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          13. Jurisdicción y Ley Aplicable
        </Text>
        <Text style={[styles(activeColors).text]}>
          Estas Condiciones se rigen por las leyes mexicanas. Cualquier
          controversia será sometida a los tribunales competentes en Zacatecas,
          Zacatecas.
        </Text>
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
      letterSpacing: 0.15,
      color: activeColors.text,
    },
    text: {
      fontFamily: "Poppins-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: activeColors.text,
    },
  });
