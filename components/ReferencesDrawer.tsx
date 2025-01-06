import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  FlatList,
  Linking,
  Pressable,
  Easing,
  useColorScheme,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const drawerWidth = 400;

const ReferenciaItem = ({ referencia }: { referencia: any }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <View style={styles(activeColors).refer}>
      <MaterialIcons
        name="menu-book"
        size={24}
        color={activeColors.textSecondary}
      />
      <View>
        <Text numberOfLines={1} style={styles(activeColors).sub1}>
          {referencia.title}
        </Text>
        <Pressable
          onPress={() => {
            Linking.openURL(referencia.link);
          }}
        >
          <Text numberOfLines={1} style={styles(activeColors).sub2}>
            {referencia.link}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const referencias = [
  {
    id: "1",
    title:
      "Consulta algunas de las afianzadoras que emiten pólizas de fianza fiscales",
    link: "https://www.sat.gob.mx/consultas/54804/consulta-las-afianzadoras-que-expiden-polizas-de-fianza-como-garantia ",
  },
  {
    id: "2",
    title: "Consulta los bancos emisores de cartas de crédito",
    link: "https://www.sat.gob.mx/consultas/34619/consulta-los-bancos-emisores-de-cartas-de-credito ",
  },
  {
    id: "3",
    title:
      "Consulta si la carta invitación o llamada telefónica por adeudos fiscales, fue generada por el SAT",
    link: "https://www.sat.gob.mx/consultas/51566/consulta-si-la-carta-invitacion-o-llamada-telefonica-por-adeudos-fiscales,-fue-generada-por-el-sat ",
  },
  {
    id: "4",
    title:
      "Presenta tu Declaración Anual de personas físicas para el ejercicio 2023",
    link: "https://www.sat.gob.mx/declaracion/23891/presenta-tu-declaracion-anual-de-personas-fisicas-para-el-ejercicio-2023 ",
  },
  {
    id: "5",
    title:
      "Presenta tu declaración de entero de retenciones de IVA del ejercicio 2022 en adelante",
    link: "https://www.sat.gob.mx/declaracion/89755/simulador-de-la-declaracion-de-entero-de-retenciones-de-iva ",
  },
  {
    id: "6",
    title:
      "Presenta tu declaración de entero de retenciones por salarios y asimilados a salarios del ejercicio 2022 en adelante",
    link: "https://www.sat.gob.mx/declaracion/80205/simulador-de-la-declaracion-de-entero-de-retenciones-por-salarios-y-asimilados-a-salarios ",
  },
  {
    id: "7",
    title: "Presenta tus pagos provisionales o definitivos de personas físicas",
    link: "https://www.sat.gob.mx/declaracion/26984/declaracion-mensual-en-el-servicio-de-declaraciones-y-pagos ",
  },
  {
    id: "8",
    title:
      "Visor de facturas emitidas y recibidas para el pago mensual, provisional y definitivo del régimen simplificado de confianza",
    link: "https://www.sat.gob.mx/declaracion/83668/simulador-del-visor-de-facturas-emitidas-y-recibidas ",
  },
  {
    id: "9",
    title: "Presenta tu declaración del RIF a través de Mis cuentas",
    link: "https://www.sat.gob.mx/declaracion/27683/presenta-tu-declaracion-del-rif-a-traves-de-mis-cuentas ",
  },
  {
    id: "10",
    title: "Presenta tu declaración de retenciones",
    link: "https://www.sat.gob.mx/declaracion/29937/presenta-tu-declaracion-de-retenciones ",
  },
  {
    id: "11",
    title: "Presenta tu declaración de pagos de personas físicas",
    link: "https://www.sat.gob.mx/declaracion/87655/presenta-tu-declaracion-de-pagos- ",
  },
  {
    id: "12",
    title:
      "Presenta tu declaración informativa por el uso de plataformas tecnológicas",
    link: "https://www.sat.gob.mx/declaracion/87721/presenta-tu-declaracion-informativa ",
  },
  {
    id: "13",
    title:
      "Presenta tu declaración de pagos mensuales y definitivos. Régimen Simplificado de Confianza",
    link: "https://www.sat.gob.mx/declaracion/53359/simulador-de-declaraciones-de-pagos-mensuales-y-definitivos ",
  },
  {
    id: "14",
    title: "Visor de deducciones personales",
    link: "https://www.sat.gob.mx/declaracion/94574/consulta-el-visor-de-deducciones-personales ",
  },
  {
    id: "15",
    title: "Visor de comprobantes de nómina para el trabajador",
    link: "https://www.sat.gob.mx/declaracion/97720/consulta-el-visor-de-comprobantes-de-nomina-para-el-trabajador ",
  },
  {
    id: "16",
    title: "Visor de comprobantes de nómina para el patrón",
    link: "https://www.sat.gob.mx/declaracion/90887/consulta-el-visor-de-comprobantes-de-nomina-para-el-patron- ",
  },
  {
    id: "17",
    title: "Presenta tu declaración del derecho extraordinario sobre minería",
    link: "https://www.sat.gob.mx/declaracion/75764/presenta-tu-declaracion-del-derecho-extraordinario-sobre-mineria ",
  },
  {
    id: "18",
    title: "Presenta tu declaración del derecho adicional sobre minería",
    link: "https://www.sat.gob.mx/declaracion/74889/presenta-tu-declaracion-del-derecho-adicional-sobre-mineria ",
  },
  {
    id: "19",
    title: "Presenta tu declaración del derecho especial sobre minería",
    link: "https://www.sat.gob.mx/declaracion/74038/presenta-tu-declaracion-del-derecho-especial-sobre-mineria ",
  },
  {
    id: "20",
    title: "Presenta tu declaración del derecho sobre minería",
    link: "https://www.sat.gob.mx/declaracion/69724/presenta-tu-declaracion-del-derecho-sobre-mineria ",
  },
  {
    id: "21",
    title:
      "Esquema de pago electrónico de derechos, productos y aprovechamientos",
    link: "https://www.sat.gob.mx/declaracion/20425/bancos-autorizados-para-recibir-pagos-de-contribuciones-federales ",
  },
  {
    id: "22",
    title:
      "Consulta las contribuciones federales que puedes pagar con línea de captura",
    link: "https://www.sat.gob.mx/declaracion/98410/contribuciones-que-puedes-pagar-con-linea-de-captura ",
  },
  {
    id: "23",
    title:
      "Presenta tu declaración informativa múltiple del impuesto especial sobre producción y servicios (Multi-IEPS)",
    link: "https://www.sat.gob.mx/declaracion/58191/declaracion-informativa-multiple-del-impuesto-especial-sobre-produccion-y-servicios ",
  },
  {
    id: "24",
    title: "Presenta tu declaración informativa de operaciones relevantes",
    link: "https://www.sat.gob.mx/declaracion/11315/declaracion-informativa-de-operaciones-relevantes ",
  },
  {
    id: "25",
    title:
      "Presenta tu declaración informativa de las entidades extranjeras sujetas a regímenes fiscales preferentes",
    link: "https://www.sat.gob.mx/declaracion/07467/declaracion-informativa-multiple,-anexo-5-%22de-los-regimenes-fiscales-preferentes%22 ",
  },
  {
    id: "26",
    title: "Presenta tu declaración informativa múltiple (DIM)",
    link: "https://www.sat.gob.mx/declaracion/23734/declaracion-informativa-multiple-(dim) ",
  },
  {
    id: "27",
    title:
      "Presenta tu declaración informativa por contraprestaciones o donativos recibidos superiores a 100,000.00 pesos",
    link: "https://www.sat.gob.mx/declaracion/65542/declaracion-informativa-de-contraprestaciones-y-donativos ",
  },
  {
    id: "28",
    title:
      "Presenta tu declaración informativa de operaciones con terceros (DIOT)",
    link: "https://www.sat.gob.mx/declaracion/74295/presenta-tu-declaracion-informativa-de-operaciones-con-terceros-(diot)- ",
  },
  {
    id: "29",
    title:
      "Presenta tu declaración informativa para notarios públicos y demás fedatarios (DeclaraNOT en línea)",
    link: "https://www.sat.gob.mx/declaracion/60161/declaracion-informativa-para-notarios-publicos-y-demas-fedatarios-(declaranot-en-linea) ",
  },
  {
    id: "30",
    title: "Presenta la declaración anual de pago en especie con obras de arte",
    link: "https://www.sat.gob.mx/declaracion/72869/declaracion-anual-de-pago-en-especie-con-obras-de-arte ",
  },
  {
    id: "31",
    title:
      "Presenta la declaración anual de pago en especie a través de la donación o entrega de obras de arte",
    link: "https://www.sat.gob.mx/declaracion/44689/declaracion-anual-de-pago-en-especie-a-traves-de-la-donacion-de-obras-de-arte ",
  },
  {
    id: "32",
    title:
      "Presenta tu información de contribuyentes dedicados a la construcción y venta de casa habitación",
    link: "https://www.sat.gob.mx/declaracion/57453/declaracion-de-informacion-de-contribuyentes-dedicados-a-la-construccion-y-venta-de-casa-habitacion ",
  },
  {
    id: "33",
    title: "Titulo no encontrado",
    link: "https://www.sat.gob.mx/declaracion/operacion/57453/declaracion-de-informacion-de-contribuyentes-dedicados-a-la-construccion-y-venta-de-casa-habitacion ",
  },
  {
    id: "34",
    title: "Declaración Anual de pago en especie en ceros",
    link: "https://www.sat.gob.mx/declaracion/57260/declaracion-anual-de-pago-en-especie-en-ceros ",
  },
  {
    id: "35",
    title:
      "Presenta tu declaración informativa del listado de conceptos del impuesto empresarial a tasa única",
    link: "https://www.sat.gob.mx/declaracion/01859/declaracion-informativa-del-listado-de-conceptos-del-impuesto-empresarial-a-tasa-unica ",
  },
  {
    id: "36",
    title: "Presenta tu declaración informativa del fomento al primer empleo",
    link: "https://www.sat.gob.mx/declaracion/21323/declaracion-informativa-del-fomento-al-primer-empleo ",
  },
  {
    id: "37",
    title:
      "Presenta tu declaración de pagos definitivos de IVA del ejercicio 2024 en adelante",
    link: "https://www.sat.gob.mx/declaracion/16010/presenta-tu-declaracion-de-pagos-definitivos-de-iva-del-ejercicio-2024-en-adelante ",
  },
  {
    id: "38",
    title: "Presenta tus pagos provisionales o definitivos de personas morales",
    link: "https://www.sat.gob.mx/declaracion/95291/declaracion-mensual-para-tu-empresa-en-el-servicio-de-declaraciones-y-pagos ",
  },
  {
    id: "39",
    title:
      "Presenta tu declaración de pagos provisionales del régimen general del ejercicio 2022 en adelante",
    link: "https://www.sat.gob.mx/declaracion/00220/simulador-de-la-declaracion-de-pagos-provisionales-del-regimen-general ",
  },
  {
    id: "40",
    title: "Consulta tu declaración de retorno de inversiones",
    link: "https://www.sat.gob.mx/declaracion/87577/declaracion-de-retorno-de-inversiones ",
  },
  {
    id: "41",
    title:
      "Visor de facturas de ingresos para el pago provisional del régimen general",
    link: "https://www.sat.gob.mx/declaracion/26751/simulador-del-visor-de-facturas-de-ingresos ",
  },
  {
    id: "42",
    title: "Presenta tu declaración de entero de retenciones",
    link: "https://www.sat.gob.mx/declaracion/69868/presenta-tu-declaracion-de-entero-de-retenciones ",
  },
  {
    id: "43",
    title: "Presenta tu declaración de pagos de residentes en el extranjero",
    link: "https://www.sat.gob.mx/declaracion/42009/presenta-tu-declaracion-de-pagos ",
  },
  {
    id: "44",
    title:
      "Presenta tu declaración anual personas morales. Régimen Simplificado de Confianza",
    link: "https://www.sat.gob.mx/declaracion/36349/presenta-tu-declaracion-anual-personas-morales.-regimen-simplificado-de-confianza ",
  },
  {
    id: "45",
    title:
      "Presenta tu declaración de pagos provisionales y definitivos. Régimen simplificado de confianza",
    link: "https://www.sat.gob.mx/declaracion/46610/simulador-de-declaraciones-de-pagos-provisionales-y-definitivos ",
  },
  {
    id: "46",
    title:
      "Presenta tu declaración anual personas morales. Régimen general ejercicios 2019 y posteriores",
    link: "https://www.sat.gob.mx/declaracion/21496/presenta-tu-declaracion-anual-personas-morales.-regimen-general-ejercicios-2019-y-posteriores ",
  },
  {
    id: "47",
    title: "Presenta tu declaración anual de personas morales",
    link: "https://www.sat.gob.mx/declaracion/58049/declaracion-anual-de-personas-morales-en-el-servicio-de-declaraciones-y-pagos ",
  },
  {
    id: "48",
    title:
      "Presenta tu información de intereses y enajenación de acciones del sector financiero",
    link: "https://www.sat.gob.mx/declaracion/14968/declaracion-de-informacion-de-intereses-y-enajenacion-de-acciones-del-sector-financiero ",
  },
  {
    id: "49",
    title: "Presenta tu información de fideicomisos del sector financiero",
    link: "https://www.sat.gob.mx/declaracion/70939/declaracion-de-informacion-de-fideicomisos-del-sector-financiero ",
  },
  {
    id: "50",
    title: "Presenta tu declaración de depósitos en efectivo",
    link: "https://www.sat.gob.mx/declaracion/18844/presenta-tu-declaracion-de-depositos-en-efectivo- ",
  },
  {
    id: "51",
    title:
      "Presenta tu declaración informativa de empresas manufactureras, maquiladoras y de servicios de exportación (DIEMSE)",
    link: "https://www.sat.gob.mx/declaracion/23201/declaracion-informativa-diemse ",
  },
  {
    id: "52",
    title:
      "Presenta tu declaración informativa de operaciones realizadas por cuenta de los integrantes del consorcio petrolero",
    link: "https://www.sat.gob.mx/declaracion/93286/declaracion-informativa-de-operaciones-realizadas-por-cuenta-de-los-integrantes-del-consorcio-petrolero- ",
  },
  {
    id: "53",
    title:
      "Presenta tu información de préstamos o aportaciones para futuros aumentos de capital",
    link: "https://www.sat.gob.mx/declaracion/61376/aviso-de-prestamos,-aportaciones-para-futuros-aumentos-de-capital-o-aumentos-de-capital-recibidos-en-efectivo-86-a ",
  },
  {
    id: "54",
    title:
      "Presenta tus declaraciones anuales informativas de partes relacionadas",
    link: "https://www.sat.gob.mx/declaracion/56503/presenta-tus-declaraciones-de-partes-relacionadas ",
  },
  {
    id: "55",
    title:
      "Declaración Informativa de operaciones efectuadas a través de fideicomisos",
    link: "https://www.sat.gob.mx/declaracion/51301/presenta-tu-declaracion-anual-de-operaciones-efectuadas-a-traves-de-fideicomisos ",
  },
  {
    id: "56",
    title:
      "Presenta tu declaración informativa del monto de las aportaciones percibidas en fondos y cajas de ahorro",
    link: "https://www.sat.gob.mx/declaracion/04752/presenta-la-informacion-del-monto-de-las-aportaciones-efectuadas-a-los-fondos-y-cajas-de-ahorro-que-administren,-asi-como-de-los-intereses-nominales-y-reales-pagados,-en-el-ejercicio-de-que-se-trate ",
  },
  {
    id: "57",
    title:
      "Presenta tu declaración informativa de las instituciones fiduciarias en operaciones de fideicomiso por el uso o goce temporal de inmuebles",
    link: "https://www.sat.gob.mx/declaracion/25261/declaracion-presentada-por-las-instituciones-fiduciarias-en-operaciones-de-fideicomiso-por-el-uso-o-goce-temporal-de-inmuebles ",
  },
  {
    id: "58",
    title:
      "Presenta tu declaración de pago del derecho de extracción de hidrocarburos",
    link: "https://www.sat.gob.mx/declaracion/08310/declaracion-mensual-del-derecho-de-extraccion-de-hidrocarburos ",
  },
  {
    id: "59",
    title:
      "Presenta tu declaración de pago del derecho de exploración de hidrocarburos",
    link: "https://www.sat.gob.mx/declaracion/80861/declaracion-mensual-del-derecho-de-exploracion-de-hidrocarburos ",
  },
  {
    id: "60",
    title:
      "Presenta tu declaración mensual del derecho por la utilidad compartida",
    link: "https://www.sat.gob.mx/declaracion/76313/declaracion-mensual-del-derecho-por-la-utilidad-compartida ",
  },
  {
    id: "61",
    title:
      "Presenta tu declaración anual del derecho por la utilidad compartida",
    link: "https://www.sat.gob.mx/declaracion/78812/declaracion-anual-del-derecho-por-la-utilidad-compartida ",
  },
  {
    id: "62",
    title:
      "Presenta tu declaración informativa de estímulos a entidades federativas, municipios y otros organismos públicos",
    link: "https://www.sat.gob.mx/declaracion/72117/declaracion-informativa-de-estimulos-fiscales-en-entidades-federativas,-municipios-y-otros-organismos-publicos,-version-2011 ",
  },
  {
    id: "63",
    title: "Cancelación de facturas",
    link: "https://www.sat.gob.mx/consultas/91447/nuevo-esquema-de-cancelacion ",
  },
  {
    id: "64",
    title: "Complemento Carta Porte",
    link: "https://www.sat.gob.mx/consultas/68823/complemento-carta-porte- ",
  },
  {
    id: "65",
    title: "Complemento de pagos",
    link: "https://www.sat.gob.mx/consultas/92764/comprobante-de-recepcion-de-pagos ",
  },
  {
    id: "66",
    title: "Consulta y recuperación de comprobantes",
    link: "https://www.sat.gob.mx/consultas/42968/consulta-y-recuperacion-de-comprobantes-(nuevo) ",
  },
  {
    id: "67",
    title: "Facturación con estímulo en la región fronteriza",
    link: "https://www.sat.gob.mx/consultas/22035/facturacion-con-estimulo-en-la-region-fronteriza- ",
  },
  {
    id: "68",
    title: "Factura de comercio exterior",
    link: "https://www.sat.gob.mx/consultas/61165/comprobante-de-comercio-exterior ",
  },
  {
    id: "69",
    title: "Factura de retenciones e información de pagos.",
    link: "https://www.sat.gob.mx/consultas/64451/conoce-el-esquema-de-retenciones-e-informacion-de-pagos. ",
  },
  {
    id: "70",
    title: "Formato de Factura (Anexo 20)",
    link: "https://www.sat.gob.mx/consultas/35025/formato-de-factura-electronica-(anexo-20) ",
  },
  {
    id: "71",
    title: "Organismos públicos",
    link: "https://www.sat.gob.mx/consultas/22331/organismos-publicos ",
  },
  {
    id: "72",
    title: "Recibo de nómina",
    link: "https://www.sat.gob.mx/consultas/97722/comprobante-de-nomina ",
  },
  {
    id: "73",
    title: "Catálogo de Productos y Servicios",
    link: "https://www.sat.gob.mx/consultas/53693/catalogo-de-productos-y-servicios ",
  },
  {
    id: "74",
    title:
      "Consulta el padrón de escuelas que expiden comprobantes con requisitos fiscales",
    link: "https://www.sat.gob.mx/consultas/23892/consulta-el-padron-de-escuelas-que-expiden-comprobantes-con-requisitos-fiscales ",
  },
  {
    id: "75",
    title: "Consulta los complementos y complementos concepto de factura",
    link: "https://www.sat.gob.mx/consultas/49522/complementos-y-complementos-concepto-de-factura- ",
  },
  {
    id: "76",
    title: "Patrones con errores en el cálculo de las retenciones de nómina",
    link: "https://www.sat.gob.mx/consultas/68670/patrones-con-errores-en-el-calculo-de-las-retenciones-de-nomina ",
  },
  {
    id: "77",
    title: "Factura SAT Móvil",
    link: "https://www.sat.gob.mx/consultas/81393/factura-sat-movil ",
  },
  {
    id: "78",
    title: "Servicios especializados de validación",
    link: "https://www.sat.gob.mx/consultas/20585/conoce-los-servicios-especializados-de-validacion ",
  },
];

const ReferencesDrawer = ({
  isVisible,
  toggleDrawer,
}: {
  isVisible: any;
  toggleDrawer: any;
}) => {
  const animatedValue = useRef(
    new Animated.Value(isVisible ? 0 : drawerWidth)
  ).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isVisible ? 0 : drawerWidth,
      duration: 300, // Duración más corta para una animación rápida
      easing: Easing.out(Easing.circle), // Efecto de suavizado
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const activeColors = Colors[isDarkMode ? "dark" : "light"];

  return (
    <Animated.View
      style={[
        styles(activeColors).drawer,
        { transform: [{ translateX: animatedValue }] },
      ]}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <View style={styles(activeColors).header}>
              <TouchableOpacity onPress={toggleDrawer}>
                <MaterialCommunityIcons
                  name="text-search"
                  size={24}
                  color={activeColors.textSecondary}
                />
              </TouchableOpacity>
              <Text style={styles(activeColors).h6}>Referencias</Text>
            </View>
          }
          data={referencias}
          scrollEnabled={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ReferenciaItem referencia={item} />}
        />
      </View>
    </Animated.View>
  );
};

const styles = (activeColors: any) =>
  StyleSheet.create({
    drawer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: drawerWidth,
      backgroundColor: activeColors.card,
      shadowColor: activeColors.cardShadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      padding: 20,
      zIndex: 1000,
    },
    header: {
      flexDirection: "row",
      gap: 10,
      marginTop: 20,
      alignItems: "center",
    },
    h6: {
      fontSize: 20,
      fontFamily: "Poppins-Bold",
      color: activeColors.text,
    },
    refer: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: activeColors.secondary,
    },
    sub1: {
      fontSize: 16,
      fontFamily: "Poppins-Regular",
      color: activeColors.text,
      width: "80%",
    },
    sub2: {
      fontSize: 14,
      fontFamily: "Poppins-Regular",
      color: activeColors.textHint,
    },
  });

export default ReferencesDrawer;
