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

        <Text style={[styles(activeColors).h5]}>
          1. Responsable del Tratamiento de Datos Personales
        </Text>
        <Text style={[styles(activeColors).text]}>
          El responsable del tratamiento de los datos personales es MICHISOFT S
          DE RL DE CV, con domicilio en CALLE CIRCUITO DEL GATO 202, CIUDAD
          ADMINISTRATIVA, 98160 ZACATECAS, ZAC.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Correo de contacto: contacto.michisoft@gmail.com
        </Text>

        <Text style={[styles(activeColors).h5]}>
          2. Datos Personales Recopilados
        </Text>
        <Text style={[styles(activeColors).text]}>
          Los datos personales que recopilamos incluyen, pero no se limitan a:
        </Text>
        <Text style={[styles(activeColors).text]}>a) Usuarios Registrados</Text>
        <Text style={[styles(activeColors).text]}>
          • Datos de Identificación: Nombre, apellido(s), username.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos de Contacto: Dirección de correo electrónico.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos Fiscales: Régimen fiscal (para personalización de respuestas
          relacionadas con consultas contables o fiscales).
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos de Ubicación: Ubicación aproximada y precisa (en modo no
          continuo).
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos Multimedios: Acceso a cámara y galería de fotos.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos de Redes Sociales: Información asociada a cuentas conectadas
          mediante OAuth (Facebook, Twitter, Google), como foto de perfil o
          identificadores públicos.
        </Text>
        <Text style={[styles(activeColors).text]}>b) Usuarios Invitados</Text>
        <Text style={[styles(activeColors).text]}>
          En el caso de usuarios que acceden sin un registro completo (en
          adelante, “Usuario Invitado”), únicamente se recopilarán:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Consultas realizadas: Texto ingresado en la plataforma para generar
          respuestas.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Respuestas generadas: Información proporcionada por la Aplicación en
          respuesta a las consultas.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Feedback del Usuario: Opiniones, calificaciones o comentarios
          proporcionados en relación con las respuestas.
        </Text>
        <Text style={[styles(activeColors).text]}>
          Los datos de los Usuarios Invitados se almacenarán de forma temporal y
          serán anonimizados para análisis interno o mejora del servicio.
        </Text>

        <Text style={[styles(activeColors).h5]}>
          3. Métodos de Obtención de Datos
        </Text>
        <Text style={[styles(activeColors).text]}>
          Los datos personales pueden ser proporcionados directamente por el
          Usuario o recopilados automáticamente mediante:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Formularios de contacto en la Aplicación.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Permisos solicitados en dispositivos móviles (ubicación, cámara,
          galería de fotos).
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Autenticación mediante servicios de terceros como Firebase
          Authentication o OAuth.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Interacción directa con la Aplicación, como consultas y feedback
          proporcionado por el Usuario.
        </Text>

        <Text style={[styles(activeColors).h5]}>
          4. Finalidades del Tratamiento de Datos
        </Text>
        <Text style={[styles(activeColors).text]}>
          Los datos personales se recopilan y utilizan para las siguientes
          finalidades:
        </Text>
        <Text style={[styles(activeColors).text]}>Finalidades Primarias:</Text>
        <Text style={[styles(activeColors).text]}>
          • Proporcionar acceso y funcionalidades dentro de la Aplicación.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Autenticación y registro de Usuarios.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Generar respuestas personalizadas con base en datos proporcionados,
          como el régimen fiscal del Usuario.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Comunicación directa con el Usuario a través de correos electrónicos
          o notificaciones.
        </Text>
        <Text style={[styles(activeColors).text]}>
          Finalidades Secundarias:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Mejorar la experiencia del Usuario mediante análisis estadísticos y
          estudios de comportamiento.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Personalizar los servicios y contenidos mostrados en la Aplicación.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Análisis de consultas y feedback para mejorar el servicio.
        </Text>
        <Text style={[styles(activeColors).text]}>
          El Usuario puede oponerse al tratamiento de sus datos para finalidades
          secundarias enviando un correo a contacto.michisoft@gmail.com.
        </Text>
        <Text style={[styles(activeColors).h5]}>
          5. Servicios Utilizados para el Tratamiento de Datos
        </Text>
        <Text style={[styles(activeColors).text]}>
          a) Contacto con el Usuario:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Formulario de Contacto: Se utiliza para consultas o solicitudes de
          soporte.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos Recopilados: Nombre, apellido(s), correo electrónico.
        </Text>
        <Text style={[styles(activeColors).text]}>
          b) Permisos sobre Dispositivos:
        </Text>
        <Text style={[styles(activeColors).text]}>• Permisos Solicitados:</Text>
        <Text style={[styles(activeColors).text]}>
          • Ubicación aproximada y precisa (modo no continuo).
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Acceso a la cámara y galería de fotos.
        </Text>
        <Text style={[styles(activeColors).text]}>
          c) Registro y Autenticación:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Firebase Authentication:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos Recopilados: Nombre, apellido(s), username, correo
          electrónico, foto de perfil.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • OAuth (Facebook, Twitter, Google):
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos Recopilados: Información especificada en las políticas de
          privacidad de cada servicio.
        </Text>
        <Text style={[styles(activeColors).text]}>
          d) Generación de Respuestas Personalizadas:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Datos Utilizados: Régimen fiscal, ubicación aproximada y consultas
          realizadas.
        </Text>

        <Text style={[styles(activeColors).h5]}>
          6. Tratamiento Específico de los Datos de Usuarios Invitados
        </Text>
        <Text style={[styles(activeColors).text]}>
          Para los Usuarios Invitados, el tratamiento de datos será limitado a
          las consultas ingresadas, respuestas generadas y feedback
          proporcionado, los cuales se utilizarán únicamente para:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Generar estadísticas internas de uso.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Mejorar la calidad del servicio y las respuestas proporcionadas por
          la Aplicación.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Detectar patrones de comportamiento para optimizar la experiencia
          del Usuario.
        </Text>

        <Text style={[styles(activeColors).h5]}>
          7. Compartición de Datos Personales
        </Text>
        <Text style={[styles(activeColors).text]}>
          Los datos personales pueden ser compartidos con terceros solo en los
          siguientes casos:
        </Text>
        <Text style={[styles(activeColors).text]}>
          1. Proveedores de Servicios: Para ofrecer funcionalidades específicas
          (ej. autenticación mediante Firebase).
        </Text>
        <Text style={[styles(activeColors).text]}>
          2. Cumplimiento Legal: En caso de ser requerido por autoridad
          competente.
        </Text>
        <Text style={[styles(activeColors).text]}>
          3. Consentimiento del Usuario: En situaciones donde se requiera un
          consentimiento explícito.
        </Text>
        <Text style={[styles(activeColors).text]}>
          No se compartirán datos personales con fines comerciales sin el
          consentimiento previo del Usuario.
        </Text>

        <Text style={[styles(activeColors).h5]}>
          8. Derechos del Usuario (ARCO)
        </Text>
        <Text style={[styles(activeColors).text]}>
          El Usuario tiene derecho a:
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Acceso: Conocer qué datos personales tenemos.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Rectificación: Corregir datos inexactos o desactualizados.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Cancelación: Solicitar la eliminación de sus datos, salvo que exista
          una obligación legal para conservarlos.
        </Text>
        <Text style={[styles(activeColors).text]}>
          • Oposición: Negarse al tratamiento de sus datos para finalidades
          específicas.
        </Text>
        <Text style={[styles(activeColors).text]}>
          Para ejercer estos derechos, el Usuario puede enviar un correo a
          contacto.michisoft@gmail.com indicando su solicitud y adjuntando una
          identificación oficial.
        </Text>

        <Text style={[styles(activeColors).h5]}>
          9. Seguridad de los Datos Personales
        </Text>
        <Text style={[styles(activeColors).text]}>
          Implementamos medidas técnicas, administrativas y físicas para
          proteger los datos personales contra acceso no autorizado, pérdida o
          alteración. Sin embargo, ningún sistema es completamente seguro, por
          lo que no garantizamos una protección absoluta.
        </Text>

        <Text style={[styles(activeColors).h5]}>
          10. Modificaciones a la Política de Privacidad
        </Text>
        <Text style={[styles(activeColors).text]}>
          Nos reservamos el derecho de modificar esta Política de Privacidad en
          cualquier momento para reflejar cambios en nuestras prácticas,
          servicios o en las leyes aplicables.
        </Text>
        <Text style={[styles(activeColors).text]}>
          En caso de realizar actualizaciones o modificaciones significativas,
          notificaremos a los Usuarios registrados a través del correo
          electrónico proporcionado en su perfil con al menos 15 días de
          antelación a la fecha de entrada en vigor de los cambios.
        </Text>
        <Text style={[styles(activeColors).text]}>
          El uso continuo de la Aplicación después de la notificación y de la
          entrada en vigor de las modificaciones implicará la aceptación de la
          nueva versión de la Política de Privacidad.
        </Text>
        <Text style={[styles(activeColors).text]}>
          Los Usuarios Invitados podrán consultar la versión actualizada de la
          Política de Privacidad directamente en la Aplicación.
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
